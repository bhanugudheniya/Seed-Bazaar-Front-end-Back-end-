var express = require('express');
//pakages
var router = express.Router();
var bcrypt = require('bcryptjs');
var Insta = require('instamojo-nodejs');
var url = require('url');
var randomstring = require("randomstring");
var mailer = require('../configs/mailer');

/////////////////////models
var Customer = require('../models/customers');
var Review = require('../models/review');
var Category = require('../models/category');
var Products = require('../models/product');
var Order = require('../models/order');
var DiscountCode = require('../models/discountCodes');
var Blog = require('../models/blog');
var ContactUs = require('../models/contactUs');
var BusinessContactUs = require('../models/businessContactUs');
//////////////////////////////////////customer register

router.post('/customerRegister', async (req, res) => {
    const salt = await bcrypt.genSalt(10);
    const hashing = await bcrypt.hash(req.body.password, salt);
    Customer.findOne({ email: req.body.email }, (err, customerData) => {
        if (err)
            console.log(err)
        else {
            if (customerData != null) {
                res.json({ message: "Email Already registered" })
            }
            else {
                Customer.findOne({ phone: req.body.phone }, (err, CustomerData) => {
                    if (err)
                        console.log(err)
                    else {
                        if (CustomerData != null) {
                            res.json({ message: "Phone Number Already registered" })
                        }
                        else {
                            new Customer({
                                firstname: req.body.firstname,
                                lastname: req.body.lastname,
                                phone: req.body.phone,
                                password: hashing,
                                email: req.body.email
                            }).save((err, callback) => {
                                if (err)
                                    console.log(err)
                                else
                                    res.json({ message: "Successfully Registered" })
                            })
                        }
                    }
                })
            }
        }
    })
})

////////////////////////////////////////////////customer login
router.post('/customerLogin', (req, res) => {
    Customer.findOne({ email: req.body.email }, (err, customerData) => {
        if (err)
            console.log(err)
        else {
            if (customerData == null)
                res.json({ message: "User Not Found" })
            else {
                bcrypt.compare(req.body.password, customerData.password, (err, callback) => {
                    if (err)
                        console.log(err)
                    else if (callback) {
                        customerData['token'] = customerData.generateJwt();
                        let responseObj = {
                            token: customerData.token
                        };
                        console.log(responseObj);
                        res.json(responseObj);
                    }
                    else {
                        res.json({ message: 'passwords do not match', success: false });
                    }
                })
            }
        }
    })
})

/////////////////////////////////

router.post('/addProductReview', (req, res) => {
    Review.findOne({ customerId: req.body.userId, productId: req.body.productId }, (err, cb) => {
        if (err)
            console.log(err)
        else {
            if (cb != null) {
                res.json({ message: "You have already Submitted review for product" })
            }
            else {
                Customer.findById(req.body.userId, (err, cbdata) => {
                    if (err)
                        console.log(err)
                    else {
                        if (cbdata != null) {
                            new Review({
                                productId: req.body.productId,
                                customerId: req.body.userId,
                                rating: req.body.rating,
                                title: req.body.title,
                                review: req.body.review,
                                customerName: cbdata.firstname
                            }).save((err, data) => {
                                if (err)
                                    console.log(err)
                                else {
                                    res.json({ message: "Review added Successfully" });
                                    // Review.find({ productId: req.body.productId }, (err, productData) => {
                                    //     if (err)
                                    //         console.log(err)
                                    //     else {
                                    //         let rating = 0;
                                    //         let length = productData.length;
                                    //         productData.forEach(el => {
                                    //             if (rating == 0) {
                                    //                 rating = el.rating
                                    //             }
                                    //             else {
                                    //                 rating = (rating + el.rating);
                                    //             }
                                    //         })
                                    //         rating=rating/length;
                                    //         Products.findByIdAndUpdate(req.body.productId, { rating: Math.round(rating) }, (err, callback) => {
                                    //             if (err)
                                    //                 console.log(err)
                                    //             else {

                                    //                 res.json({ message: "Review added Successfully" })
                                    //             }
                                    //         })

                                    //     }
                                    // })
                                }
                            })
                        }
                    }
                })

            }
        }
    })

})

/////////////////////////////////get Categories
router.post('/getCategory', (req, res) => {
    Category.find({ active: true }, (err, data) => {
        if (err)
            console.log(err)
        else
            res.json(data)
    })
})

//////////////////////////////////////////get Products by category
router.post('/getProductByCategory', (req, res) => {
    Category.findOne({ url: req.body.url }, (err, categoryData) => {
        if (err)
            console.log(err)
        else {
            if (categoryData != null) {
                Products.find({ active: true }, (err, productData) => {
                    if (err)
                        console.log(err)
                    else {
                        if (productData != null) {
                            let products = [];
                            productData.forEach(el => {
                                el.category.forEach(element => {
                                    if (element.id == categoryData._id) {
                                        products.push(el);
                                    }
                                })
                            })
                            res.json(products)
                        }
                    }
                })
            }
            else {
                res.json({ message: "not Products Of This Category", success: false })
            }
        }
    })
})

/////////////////////////////get Specific product by url
router.post('/getSpecificProduct', (req, res) => {
    Products.findOne({ url: req.body.url }, (err, data) => {
        if (err)
            console.log(err)
        else
            res.json(data)
    })
})
///////////////////get Specific product by id
router.post('/getSpecificProductById', (req, res) => {
    Products.findById(req.body.id, (err, data) => {
        if (err)
            console.log(err)
        else
            res.json(data)
    })
})

/////////////////////////////////////////////////////add to cart

router.post('/addToCart', (req, res) => {
    try {
        Customer.findById(req.body.userId, (err, udata) => {
            if (err)
                throw err
            else {
                let index;
                if (!udata.cart.some((el, i) => {
                    if ((el.productId == req.body.productId) && (el.variantIndex == req.body.variantIndex)) {
                        index = i;
                        console.log(index)
                    }
                    return ((el.productId == req.body.productId) && (el.variantIndex == req.body.variantIndex))
                })) {
                    let updateObj = {
                        productId: req.body.productId,
                        quantity: req.body.quantity,
                        listPrice: req.body.listPrice,
                        variantIndex: req.body.variantIndex
                    }
                    console.warn("variantIndex" + req.body.variantIndex);
                    Customer.findByIdAndUpdate(req.body.userId, { $push: { cart: updateObj } }, (err, data) => {
                        if (err)
                            throw err
                        else {
                            res.json({ message: 'Added To Cart', success: true });
                        }
                    })
                }
                else {
                    console.log(index);
                    udata.cart[index].quantity += req.body.quantity;
                    Customer.findByIdAndUpdate(req.body.userId, { cart: udata.cart }, (err, data) => {
                        if (err)
                            throw err
                        else
                            res.json({ message: 'Added Items To Cart', success: true });
                    })
                }
            }
        })
    }
    catch (err) {
        console.log(err);
    }
})


router.post('/getUserById', (req, res) => {
    try {
        Customer.findById(req.body.userId, (err, data) => {
            if (err)
                throw err
            else {
                res.json(data);
            }
        })
    }
    catch (err) {
        console.log(err);
    }
})

router.post('/getProductByUserId', async function (req, res) {
    try {
        let productsArr = [];
        if (req.body.userId) {

            const customer = await Customer.findById(req.body.userId).exec();

            console.log(customer);

            for (const el of customer.cart) {
                const product = await Products.findById(el.productId).exec();
                console.log(el);
                if (product && el.variantIndex < product.listPrice.length)
                    productsArr.push(product);
            }
        }
        else {
            for (const el of req.body.cart) {
                const product = await Products.findById(el.productId).exec();
                console.log(el)
                if (product && el.variantIndex < product.listPrice.length)
                    productsArr.push(product);
            }
        }

        console.log("FINAL ARRAY", productsArr)
        res.json(productsArr);
    }
    catch (err) {
        console.log(err);
    }
})

router.post('/viewProducts', (req, res) => {
    try {
        Products.find({ active: true }, (err, data) => {
            if (err)
                console.log(err);
            else {
                res.json(data)
            }
        })
    }
    catch (err) {
        console.log(err);
    }
})
//////////////////////////get Review
router.post('/getSpecificProductReview', async (req, res) => {
    try {
        let review = await Review.find({ productId: req.body.productId })
        res.json(review);
    }
    catch (err) {
        console.log(err)
    }
})

////////////////////////////////////////Insta mojo configuration
////////////////////////////////////////orderNow
router.post('/orderNow', (req, res) => {
    try {

        console.log(req.body);
        if (req.body.billingInfo.firstname == '') {
            res.json({ message: "Name Required", success: false });
        }
        else {
            if(req.body.billingInfo.email==''){
                res.json({ message: "Email Required", success: false });

            }
            else{
                if(req.body.billingInfo.address.address1==null){
                    res.json({ message: "Address Required", success: false });
                }
                else{
                    if(req.body.billingInfo.address.address2==null){
                        res.json({ message: "Address Required", success: false });

                    }
                    else{
                        if(req.body.billingInfo.address.state==null){
                            res.json({ message: "State Required", success: true });

                        }
                        else{
                            if(req.body.billingInfo.address.city==null){
                                res.json({ message: "City Required", success: true });

                            }
                            else{

                                new Order({
                                    customerId: req.body.billingInfo.customerId,
                                    billingInfo: req.body.billingInfo,
                                    orderNotes: req.body.orderNotes,
                                    cart: req.body.cart,
                                    cost: req.body.cost,
                                    orderStatus: "Ordered"
                                }).save((err, cbdata) => {
                                    if (err)
                                        console.log(err)
                                    else {
                                        const customerId = req.body.billingInfo.customerId;
                                        const id = cbdata._id;
                                        Order.findByIdAndUpdate(cbdata._id, { $push: { orderStatusRecord: "Ordered" } }, (err, callback) => {
                                            if (err)
                                                console.log(err)
                                            else {
                                                Insta.setKeys('test_ac6c027a59cd53e60732eff67fe', 'test_356206b1bea68d2bf3eedb9261f');
                                                // Insta.setKeys('test_ac6c027a59cd53e60732eff67fe', 'test_356206b1bea68d2bf3eedb9261f');
                                                // Insta.setKeys('aabac4bc06290569eafe3b32643c17ba', 'aabac4bc06290569eafe3b32643c17ba')
                                                // Insta.setKeys('aabac4bc06290569eafe3b32643c17ba', '368deb9e955f69f6c482d7b027d6c507');
                    
                    
                                                var data = new Insta.PaymentData();
                    
                                                Insta.isSandboxMode(true);
                    
                                                data.purpose = "Products Checkout";
                                                data.amount = ((Math.round(req.body.cost * 100)) / 100);
                                                data.buyer_name = req.body.billingInfo.firstname;
                    
                                                data.email = req.body.billingInfo.email;
                                                data.send_email = false;
                    
                                                data.redirect_url = `http://localhost:3000/customer/cb/:id?order_id=${id}&customerId=${customerId}`;
                                                // data.redirect_url = `http://api.wildorganic.in/customer/cb/:id?order_id=${id}&customerId=${customerId}`;
                                                //sdata.setRedirectUrl(redirectUrl);
                                                //data.webhook= '/webhook/';
                                                data.send_sms = false;
                                                data.allow_repeated_payments = false;
                    
                                                Insta.createPayment(data, function (error, response) {
                                                    if (error) {
                                                        // some error
                                                        console.log(error);
                                                    } else {
                                                        //Payment redirection link at response.payment_request.longurl
                    
                                                        const responseData = JSON.parse(response);
                                                        console.log(responseData);
                                                        if(responseData.success==false)
                                                            res.json({ message: "Error: Please Check All Your Feilds", success: false })
                                                        const redirectUrl = responseData.payment_request.longurl;
                                                        console.log(redirectUrl);
                    
                                                        res.json({ redirectUrl: redirectUrl });
                                                    }
                                                });
                                            }
                                        })
                                    }
                                })
                            }
                        }
                    }
                }
            }
        }

    }
    catch (err) {
        console.log('Error Handling')
        console.log(err)
        res.json({ message: "Error: Please Check All Your Feilds", success: false })
    }
});
router.get('/cb/:id', async (req, res) => {
    try {
        console.log(req.url);
        let url_parts = url.parse(req.url, true),
            responseData = url_parts.query;
        console.log(responseData);
        if (responseData.payment_id) {
            // Save the info that user has purchased the bid.
            let obj = {
                paymentFlag: true,
                paymentId: responseData.payment_id
            }
            const order = await Order.findByIdAndUpdate(responseData.order_id, { paymentFlag: true }).exec();
            if (responseData.customerId != 'null')
                await Customer.findByIdAndUpdate(responseData.customerId, { cart: [] }).exec();
            for (el of order.cart) {
                const product = await Products.findById(el.productId);
                console.log(product.listPrice)
                console.log(el)

                product.listPrice[el.variantIndex].variantStock -= el.quantity;
                if (product.listPrice[el.variantIndex].variantSold)
                    product.listPrice[el.variantIndex].variantSold += el.quantity;
                else
                    product.listPrice[el.variantIndex].variantSold = el.quantity;

                const upproduct = await Products.findByIdAndUpdate(el.productId, product);
            }
            //  res.json(order.cart)
            return res.redirect('http://wildorganic.in');
            // return res.redirect('http://localhost:4200');



        }

    }
    catch (err) {
        console.log(err)
    }
});



////////////////////////////////update customer Profile
router.post('/updateUserProfile', (req, res) => {

    let obj = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        phone: req.body.phone,
        address: req.body.address,
    }
    console.log(obj);
    Customer.findByIdAndUpdate(req.body.userId, obj, (err, cb) => {
        if (err)
            console.log(err)
        else
            res.json({ message: "Successfully Updated" })
    })
})

router.post('/getUserOrders', (req, res) => {
    Order.find({ customerId: req.body.userId, paymentFlag:true }, (err, data) => {
        if (err)
            console.log(err)
        else
            res.json(data)
    })
})

router.post('/getSpecificOrder', async (req, res) => {
    try {
        let order = await Order.findById(req.body.id)
        res.json(order);
    }
    catch (err) {
        console.log(err)
    }
})
router.post('/removeItemFromCart', (req, res) => {
    Customer.findByIdAndUpdate(req.body.userId, { $pull: { cart: { productId: req.body.productId, listPrice: req.body.listPrice, quantity: req.body.quantity } } }, (err, data) => {
        if (err)
            console.log(err)
        else
            res.json({ message: "Deleted" });

    })
})


////////////////////////////get Specific Count code
router.post('/getSpecificDiscountCode', (req, res) => {
    DiscountCode.findOne({ productId: req.body.productId }, (err, data) => {
        if (err)
            console.log(err)
        else
            res.json(data)
    })
})


router.get('/getAllDiscountCode', async (req, res) => {
    try {
        const discountCodeArr = await DiscountCode.find().exec()

        res.json({ message: 'Discount Codes Found', data:discountCodeArr, success: true });
    }
    catch (err) {
        console.error(err);
        if(err.message)
            res.json({ message: err.message, data:err, success: false });
        else
            res.json({ message: 'Error', data:err, success: false });
    }
})

/////////////////////////////////////   user cart
router.post('/updateCompleteCart', async (req, res) => {
    try {
        console.log(req.body);

        let obj = {
            cart: req.body.cart
        }
        const cart = await Customer.findByIdAndUpdate(req.body.id, obj).exec();
        console.log(cart.cart);
        res.json({ message: "Checking Out", success: true });
    }
    catch (err) {
        console.log(err);
        res.json({ message: err.message, success: false })
    }
})


router.post('/getDataForCheckout', async (req, res) => {
    try {
        let cart = req.body.cart;
        let subtotal = 0;
        let total = 0;
        let shippingCharges = 0;
        let handlingFee = 0;
        for (obj of cart) {
            let product = await Products.findById(obj.productId).exec();
            obj.listPrice = product.listPrice[obj.variantIndex].variantprice
            if (obj.discountId) {
                let discountData = await DiscountCode.findById(obj.discountId).exec();
                if (parseInt(discountData.type, 10) == 1) {
                    obj.listPrice = obj.listPrice - ((obj.listPrice * parseInt(discountData.value, 10)) / 100);
                }
                else if (parseInt(discountData.type, 10) == 2) {
                    obj.listPrice = obj.listPrice - parseInt(discountData.value, 10);
                }
                else if (parseInt(discountData.type, 10) == 3) {
                    obj.listPrice = parseInt(discountData.value, 10);
                }

                if(obj.listPrice<0)
                obj.listPrice = 0
                // if (obj.listPrice < product.minimumOrderPrice) {
                //     obj.listPrice = product.minimumOrderPrice;
                // }
            }


            obj.name = product.name + " " + product.listPrice[obj.variantIndex].variantName;
            subtotal = subtotal + (obj.listPrice * obj.quantity);
            handlingFee += product.handlingFee;
            if (!product.freeShipping)
                shippingCharges = shippingCharges + product.shippingFee;
        }
        if (shippingCharges > 25)
            shippingCharges = 25;
        if (handlingFee > 25)
            handlingFee = 25
        total = shippingCharges + subtotal + handlingFee;
        console.log(total)
        res.json({ cart: cart, shippingCharges: shippingCharges, subtotal: subtotal, total: total, handlingFee: handlingFee })
    }
    catch (err) {
        console.log(err);
    }
})

router.put('/updateCompleteUser', async (req, res) => {
    try {
        const obj = req.body
        const user = await Customer.findByIdAndUpdate(req.body._id, obj).exec();
        res.json({ message: 'Updated', success: true });
    }
    catch (err) {
        console.log(err);
    }
})

router.get('/blogByUrl/:url', async (req, res) => {
    try {
        let blog = await Blog.findOne({url:req.params.url});
        if(blog)
        res.json({ message: 'Blog Found', data:blog, success: true });
    }
    catch (err) {
        console.log(err);
        res.json({ message: err.message, success: false });
    }
})

router.post('/contactUs', async (req, res) => {
    try {
        const contact = await new ContactUs(req.body).save();
        // console.log(req.body)
        // console.log(contact)
        res.json({ message: 'Request Added', success: true });
    }
    catch (err) {
        console.log(err);
        res.json({ message: err.message, success: false });
    }
})

router.post('/businessContactUs', async (req, res) => {
    try {
        const contact = await new BusinessContactUs(req.body).save();
        res.json({ message: 'Request Added', success: true });
    }
    catch (err) {
        console.log(err);
        res.json({ message: err.message, success: false });
    }
});

router.get('/search/:search', async (req, res) => {
    try {

        let mainProductsArr = await Products.find().exec();
        let tempArr = [];

        mainProductsArr.forEach(el=>{
            console.log( el.name.toLowerCase(), req.params.search.toLowerCase())

            if(el.name.toLowerCase().includes(req.params.search.toLowerCase()))
            {
                tempArr.push(el)
            }
        })

        res.json({ message: 'Search Values', data:tempArr, success: true });

        
    }
    catch (err) {
        console.error(err);
        if(err.message)
            res.json({ message: err.message, data:err, success: false });
        else
            res.json({ message: 'Error', data:err, success: false });
    }
})

router.post('/forgotPassword',async (req,res)=>{
     try{
        const customer=await Customer.findOne({email:req.body.email}).exec();
        if(customer)
            {
                let forgotToken=randomstring.generate();
                await Customer.findByIdAndUpdate(customer._id,{forgotToken:forgotToken}).exec();
                const html = `<div style="text-align:center;">
                <p>Chick this link to change your password </p>t
                <a href="http://api.wildorganic.in/customer/forgotPasswordCheck/${forgotToken}">Verify</a>
              <br>
          </div>`
            mailer.sendEmail('info@wildorganic.in', req.body.email, "Change Your Password", html);
            res.json({message:"Please Check Your Mail"});
            }
        else
            throw new Error('User Not Found')    
    }
    catch(err){
         console.log(err)
         res.json({message:err.message,success:false});
     }
});
router.get('/forgotPasswordCheck/:id',async (req,res)=>{
     try{
        const customerCheck=await Customer.findOne({forgotToken:req.params.id}).exec();  
        if(!customerCheck)
            throw new Error("User Not Found")
        res.redirect(`http://wildorganic.in/user/forgotPasswordCheck/${req.params.id}`)  
    }
    catch(err){
         console.log(err)
         res.json({message:err.message,success:false});
     }
});

router.post('/changePassword',async (req,res)=>{
     try{
        const salt = await bcrypt.genSalt(10);
        const hashing = await bcrypt.hash(req.body.password, salt);
        const customer=await Customer.findOneAndUpdate({forgotToken:req.body.forgotToken},{password:hashing,forgotToken:''}).exec();
        if(!customer){
            throw new Error("User Not Found");
        }
        res.json({message:"Password Updated",success:true})
    }
    catch(err){
         console.log(err);
         res.json({message:err.message,success:false});

     }
})


module.exports = router