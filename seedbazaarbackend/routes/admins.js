
var express = require('express');
//pakages
var router = express.Router();
var bcrypt = require('bcryptjs');
var multer = require("multer")
var fs = require('fs');
var path = require('path');
var mailer = require('../configs/mailer');
//models
var Admin = require('../models/admin');
var Category = require('../models/category');
var Product = require('../models/product');
var Blog = require('../models/blog');
var ContentPage = require('../models/contentPage');
var discountPage = require('../models/discountCodes');
var Customer = require('../models/customers');

var ContentPage = require('../models/contentPage');
var Homepage = require('../models/homepageBanner');
var Review = require('../models/review');
var Order = require('../models/order');
var OrderStatus = require('../models/orderStatus');
var ContactUs = require('../models/contactUs');
var BusinessContactUs = require('../models/businessContactUs');

////////////////////////////////////////////////mailer configs
const mailHost = 'smtp.gmail.com'; //mail host (string type)
const mailPort = 465; //port of mail (string type)
const mailSecure = true; // true for 465, false for other ports (boolean type)
const mailAuthUser = 'info@wildorganic.in'; // user of the mailer (string type)
const mailAuthPassword = 'Wilg@organic2016'; // password of mailer (string type)
const mailSendersAddress = 'info@wildorganic.in'; // sender mail address (string type)





//////////////////////////////////////////////// admin 

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + '.' + file.originalname);

        // this is the file name it is always unique save this value to db => file.fieldname + '-' + Date.now() + '.' + file.originalname
    }
});
// var upload = multer()
// multiple ways of uploading img
var uploadImg = multer({ storage: storage }).single('img');
var upload = multer({ storage: storage });

// image upload with error handling
router.post('/imgUpload', (req, res) => {
    try {

        uploadImg(req, res, function (err) {
            if (err instanceof multer.MulterError) {
                // A Multer error occurred when uploading.
                console.log(err)
                res.json({ message: "error uploading image" })
            } else if (err) {
                // An unknown error occurred when uploading.
                console.log(err)
                res.json({ message: err });
            }
            else {

                if (res.req.file) {

                    console.log("filename" + res.req.file.filename)
                    res.json({ message: `image uploaded filename : ${res.req.file.filename}` });
                }
                else {
                    res.json({ message: "no image Uploaded" })
                }
            }
        })
    }
    catch (err) {
        console.log(err);
    }
})

// image Upload without error handling
router.post('/imgUploadAlt', upload.single('img'), (req, res) => {

    if (res.req.file) {

        console.log("filename" + res.req.file.filename)

        res.json({ message: `image uploaded filename : ${res.req.file.filename}` });
    }
    else {
        res.json({ message: "no image Uploaded" })
    }
})



router.post('/register', function (req, res) {
    try {
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;
        const password2 = req.body.password;
        Admin.findOne({
            email: {
                "$regex": "^" + email + "\\b", "$options": "i"
            }
        }, function (err, mail) {
            if (mail) {
                res.json({ "err": "Mail already used" });
            }
            else {
                var newAdmin = new Admin({
                    name: name,
                    email: email,
                    password: password,
                    password2: password2,
                });
                Admin.createUser(newAdmin, function (err, admin) {
                    if (err) throw err;
                    console.log(admin);
                });
                res.json({ message: 'You are registered and can now login', success: true });
            }
        });
    }
    catch (err) {
        console.log(err);
        res.json(err);
    }
})

//////////////////////////////////////////////// admin login
router.post('/login', (req, res) => {
    let AdminObj = {
        email: req.body.email,
        password: req.body.password
    }
    Admin.findOne({
        email: AdminObj.email
    },
        (err, admin) => {
            if (err) {
                res.json({ "message": err });
            }
            else {
                if (admin == null) {
                    res.json({ "message": "Check Your Credentials" });
                }
                else {
                    bcrypt.compare(AdminObj.password, admin.password, function (err, resvar) {
                        if (err) {
                            // handle error
                            console.log(err);
                        }
                        if (resvar) {
                            // Send JWT
                            admin['token'] = admin.generateJwt();
                            console.log(admin.token);
                            // console.log(data)
                            // res.json(data);
                            let responseObj = {
                                token: admin.token
                            };
                            console.log(responseObj);
                            res.json(responseObj);
                        }
                        else {
                            // response is OutgoingMessage object that server response http request
                            res.json({ message: 'passwords do not match', success: false });
                        }
                    });
                }
            }

        })

    console.log(AdminObj);
})

router.post('/viewAdmin', (req, res) => {
    Admin.find((err, data) => {
        if (err)
            console.log(err)
        else {
            res.json(data);
        }
    })
})

router.post('/deleteAdmin', (req, res) => {
    Admin.findByIdAndRemove(req.body._id, (err, data) => {
        if (err)
            console.log(err);
        else {
            res.json({ message: "Admin has been deleted", success: true });
        }
    })
})

/////////////////////////////////// CATEGORY
router.post('/createCategory', (req, res) => {
    Category.findOne({ name: req.body.name }, (err, checkNameData) => {
        if (err)
            console.log(err);
        else if (checkNameData)
            res.json({ message: "Category with same name exists", success: false });
        else {
            Category.findOne({ url: req.body.url }, (err, checkUrlData) => {
                if (err)
                    console.log(err);
                else if (checkUrlData)
                    res.json({ message: "Category with same url exists", success: false });
                else {
                    new Category({
                        name: req.body.name,
                        url: req.body.url,
                        metadata: req.body.metadata,
                        parentCategory: req.body.parentCategory,
                        description: req.body.description
                    }).save((err, data) => {
                        if (err)
                            console.log(err)
                        else {
                            res.json({ message: "Category Created", success: true })
                        }
                    });
                }
            })
        }
    })
})

router.post('/viewCategory', (req, res) => {
    Category.find((err, data) => {
        if (err)
            console.log(err)
        else {
            res.json(data);
        }
    })
})

router.post('/updateCategory', (req, res) => {
    let obj = {
        name: req.body.name,
        url: req.body.url,
        metadata: req.body.metadata,
        parentCategory: req.body.parentCategory,
        description: req.body.description
    }
    Category.findByIdAndUpdate(req.body._id, obj, (err, data) => {
        if (err)
            console.log(err)
        else {
            res.json({ message: "Category Updated", success: true })
        }
    })
})

router.post('/deleteCategory', (req, res) => {
    console.log(req.body._id)
    try {
        Category.findById(req.body._id, (err, checkData) => {
            if (err)
                console.log(err)
            else {
                Category.findOne({ parentCategory: checkData.name }, (err, checkParentData) => {
                    if (err)
                        console.log(err);
                    else if (checkParentData)
                        res.json({ message: "Category Cannot be deleted because it has sub categories" })
                    else {
                        Category.findByIdAndRemove(req.body._id, (err, data) => {
                            if (err)
                                console.log(err)
                            else {
                                res.json({ message: "Category Deleted", success: true })
                            }
                        })
                    }
                })
            }
        })
    }
    catch (err) {
        console.log(err);
    }
})

router.post('/toggleCategoryActive', (req, res) => {
    try {
        Category.findByIdAndUpdate(req.body._id, { active: req.body.active }, (err, data) => {
            if (err)
                console.log(err)
            else {
                if (req.body.active)
                    res.json({ message: "Changed to Active" })
                else
                    res.json({ message: "Changed to inactive" })
            }
        })
    }
    catch (err) {
        console.log(err);
    }
})

router.post('/findCategoryByUrl', (req, res) => {
    try {
        Category.findOne({ url: req.body.url }, (err, data) => {
            if (err)
                console.log(err);
            else {
                res.json(data);
            }
        })
    }
    catch (err) {
        console.log(err);
    }
})

router.post('/updateCategorySeo', (req, res) => {
    try {
        Category.findById(req.body._id, (err, data) => {
            if (err)
                console.log(err);
            else {
                console.log(data._id);
                Category.find({ url: req.body.url }, (err, dataArr) => {
                    if (err)
                        console.log(err);
                    else {
                        if (dataArr.length == 0 || (dataArr.length == 1 && dataArr[0]._id == req.body._id)) {
                            let obj = {
                                url: req.body.url,
                                metadata: req.body.metadata
                            }
                            Category.findByIdAndUpdate(data._id, obj, (err, updatedData) => {
                                if (err)
                                    console.log(err);
                                else
                                    res.json({ message: 'SEO has been updated', success: true });
                            })
                        }
                        else {
                            res.json({ message: 'url already exist', success: false });
                        }
                    }
                })
            }
        })
    }
    catch (err) {
        console.log(err);
    }
})

router.post('/addProduct', upload.single('file'), (req, res) => {
    try {
        Product.findOne({ name: req.body.name }, (err, checkNameData) => {
            if (err)
                throw err

            else if (checkNameData)
                res.json({ message: 'Product With Same Name Exists', success: false });

            else
                Product.findOne({ url: req.body.url }, (err, checkNameData) => {
                    if (err)
                        throw (err);
                    else if (checkNameData)
                        res.json({ message: "Product with same Url exists", success: false });
                    else {
                        new Product({
                            name: req.body.name,
                            productDetails: req.body.productDetails,
                            additionalDetails: req.body.additionalDetails,
                            listPrice: JSON.parse(req.body.listPrice),
                            minimumOrderPrice: req.body.minimumOrderPrice,
                            handlingFee: req.body.handlingFee,
                            shippingFee: req.body.shippingFee,
                            category: JSON.parse(req.body.category),
                            SKU: req.body.SKU,
                            featured: req.body.featured,
                            freeShipping: req.body.freeShipping,
                            reviewAllowed: req.body.reviewAllowed,
                            needChanges: req.body.needChanges,
                            url: req.body.url,
                            metadata: req.body.metadata,
                            blog: req.body.blog,
                            filePath: res.req.file.filename,
                            sliderFilePath: [res.req.file.filename]
                        }).save((err, data) => {
                            if (err)
                                throw (err);
                            else {
                                res.json({ message: 'Product Added', success: true });
                            }
                        })
                    }
                })
        })
    }
    catch (err) {
        console.log("EERRRROOOOORRRR", err);
        res.json({ message: 'Error', success: false });
    }
})

router.post('/viewProducts', (req, res) => {
    try {
        Product.find((err, data) => {
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

router.post('/findProductByUrl', (req, res) => {
    try {
        Product.findOne({ url: req.body.url }, (err, data) => {
            if (err)
                console.log(err);
            else {
                res.json(data);
            }
        })
    }
    catch (err) {
        console.log(err);
    }
})

router.post('/deleteProduct', (req, res) => {
    try {
        Product.findByIdAndDelete(req.body._id, (err, data) => {
            if (err)
                console.log(err);
            else {
                res.json({ message: 'Product Deleted', success: true });
            }
        })
    }
    catch (err) {
        console.log(err);
    }
})

router.post('/updateProductSeo', (req, res) => {
    try {
        Product.findById(req.body._id, (err, data) => {
            if (err)
                console.log(err);
            else {
                console.log(data._id);
                Product.find({ url: req.body.url }, (err, dataArr) => {
                    if (err)
                        console.log(err);
                    else {
                        if (dataArr.length == 0 || (dataArr.length == 1 && dataArr[0]._id == req.body._id)) {
                            let obj = {
                                url: req.body.url,
                                metadata: req.body.metadata
                            }
                            Product.findByIdAndUpdate(data._id, obj, (err, updatedData) => {
                                if (err)
                                    console.log(err);
                                else
                                    res.json({ message: 'SEO has been updated', success: true });
                            })
                        }
                        else {
                            res.json({ message: 'url already exist', success: false });
                        }
                    }
                })
            }
        })
    }
    catch (err) {
        console.log(err);
    }
})


router.post('/toggleProductActive', (req, res) => {
    try {
        Product.findByIdAndUpdate(req.body._id, { active: req.body.active }, (err, data) => {
            if (err)
                console.log(err)
            else {
                if (req.body.active)
                    res.json({ message: "Changed to Active" })
                else
                    res.json({ message: "Changed to inactive" })
            }
        })
    }
    catch (err) {
        console.log(err);
    }
})


router.post('/updateProduct', (req, res) => {

    let obj = {
        name: req.body.name,
        productDetails: req.body.productDetails,
        additionalDetails: req.body.additionalDetails,
        listPrice: req.body.listPrice,
        minimumOrderPrice: req.body.minimumOrderPrice,
        handlingFee: req.body.handlingFee,
        shippingFee: req.body.shippingFee,
        category: req.body.category,
        SKU: req.body.SKU,
        featured: req.body.featured,
        freeShipping: req.body.freeShipping,
        reviewAllowed: req.body.reviewAllowed,
        needChanges: req.body.needChanges,
        blog: req.body.blog
    }
    Product.findByIdAndUpdate(req.body._id, obj, (err, data) => {
        if (err)
            console.log(err)
        else {
            res.json({ message: "Product Updated", success: true })
        }
    })
})

router.post('/addBLog',upload.single('file') ,(req, res) => {
    try {
        new Blog({
            name: req.body.name,
            author: req.body.author,
            description: req.body.description,
            productName: req.body.productName,
            url: req.body.url,
            Blog: req.body.Blog,
            file:res.req.file.filename
        }).save((err, data) => {
            if (err)
                console.log(err)
            else
                res.json({ message: 'New Blog has been added', success: true });
        })
    }
    catch (err) {
        console.log(err);
    }
})

router.post('/viewBlog', (req, res) => {
    try {
        Blog.find((err, data) => {
            if (err)
                console.log(err);
            else
                res.json(data);
        })
    }
    catch (err) {
        console.log(err);
    }
})

router.post('/deleteBlogById', (req, res) => {
    try {
        Blog.findByIdAndDelete(req.body._id, (err, data) => {
            if (err)
                console.log(err);
            else
                res.json({ message: 'Blog Has Been Deleted', success: true });
        })
    }
    catch (err) {
        console.log(err);
    }
})

router.post('/updateBlogById', (req, res) => {
    try {
        let obj = {
            name: req.body.name,
            author: req.body.author,
            description: req.body.description,
            url: req.body.url,
            productName: req.body.productName,
            Blog: req.body.Blog
        }
        Blog.findByIdAndUpdate(req.body.blogId, obj, (err, blogData) => {
            if (err)
                throw err
            else
                res.json({ message: 'Blog Updated', success: true });
        })
    }
    catch (err) {
        console.log(err);
    }
})


/////////////////////////// update blog image
router.post('/updateBlogImageById',upload.single('file'), async (req, res) => {
    try {
        console.log("ROUTE RUNNING")
        if(res.req.file)
        {
            console.log(res.req.file.filename)
            const blog = await Blog.findByIdAndUpdate(req.body.id,{file:res.req.file.filename})
            res.json({ message: 'File Uploaded', success: true });
        }
        else
            throw new Error('File was not uploaded')
    }
    catch (err) {
        console.error(err);
        if(err.message)
            res.json({ message: err.message, data:err, success: false });
        else
            res.json({ message: 'Error', data:err, success: false });
    }
})

///////////////////////////////Content Page
router.post('/addContentPage', (req, res) => {
    new ContentPage({
        title: req.body.title,
        content: req.body.content,
        url: req.body.url
    }).save((err, data) => {
        if (err)
            console.log(err)
        else
            res.json({ message: "Successfully Added New Content Page" });
    })
})
////////////////////////////////////get Content Page
router.post('/getContentPage', (req, res) => {
    ContentPage.find((err, data) => {
        if (err)
            console.log(err)
        else
            res.json(data)
    })
})
router.post('/toggleActiveContent', (req, res) => {
    ContentPage.findOneAndUpdate(req.body.id, { activeFlag: req.body.active }, (err, data) => {
        if (err)
            console.log(err)
        else
            res.json({ message: "Successfully Updated" })
    })
})
/////////////////////////////////update meta data content

router.post('/updateMetaContent', (req, res) => {
    let obj = {
        metadata: req.body.metadata,
        url: req.body.url
    }
    ContentPage.findByIdAndUpdate(req.body._id, obj, (err, data) => {
        if (err) {
            console.log(err)
        } else {
            res.json({ message: "Successfully Updated", success: true })
        }
    })
})


//////////////////////////////////// find content by Url

router.post('/findContentByUrl', (req, res) => {
    ContentPage.findOne({ url: req.body.url }, (err, data) => {
        if (err)
            console.log(err);
        else {
            res.json(data);
        }
    })
}
)
/////////////////////////////////////////////delete content Page

router.post('/deleteContentPost', (req, res) => {
    try {

        ContentPage.findByIdAndDelete(req.body._id, (err, data) => {
            if (err)
                console.log(err)
            else
                res.json({ message: "Successfully Deleted" })
        })
    }
    catch (err) {
        console.log(err)
    }
})

////////////////////////////////////////////////// homepage add
router.post('/addHomepageBanner', (req, res) => {
    try {
        Homepage.find((err, data) => {
            if (err)
                console.log(err);
            else {
                new Homepage({
                    title: req.body.title,
                    url: req.body.url,
                    position: data.length,
                    urlFlag: req.body.urlFlag
                }).save((err, data) => {
                    if (err)
                        throw err
                    else {
                        res.json({ message: 'New Banner Created', success: 'true' });
                    }
                });
            }
        })
    }
    catch (err) {
        console.log(err);
    }
})

//////////////////////////////////////////////////// homepage get
router.post('/getHomepageBanner', (req, res) => {
    try {
        Homepage.find((err, data) => {
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

///////////////////////////////////////////////////// homepage update
router.post('/updateHomepageBanner', (req, res) => {
    try {
        let obj = {
            title,
            url,
            urlFlag
        }
        Homepage.findByIdAndUpdate(req.body._id, (err, data) => {
            if (err)
                throw err
            else {
                res.json({ message: 'Banner Updated', success: true });
            }
        })
    }
    catch (err) {
        console.log(err);
    }
})

////////////////////////////////////////////////////// homepage delete
router.post('/deleteHomepageBanner', (req, res) => {
    try {
        Homepage.findByIdAndDelete(req.body._id, (err, data) => {
            if (err)
                throw err
            else {
                res.json({ message: 'Banner Deleted', success: true });
            }
        })
    }
    catch (err) {
        console.log(err);
    }
})
///////////////////////////////////////////////////get All customers
router.post('/getCustomers', (req, res) => {
    Customer.find((err, callback) => {
        if (err)
            console.log(err)
        else {
            res.json(callback)
        }
    })
})
////////////////////delete customer
router.post('/deleteCustomer', (req, res) => {
    Customer.findByIdAndDelete(req.body.customerId, (err, callback) => {
        if (err)
            console.log(err)
        else {
            res.json({ message: "Deleted Successfully" });
        }
    })
})
/////////////////////////////////reset customer passowrd
router.post('/resetPassword', (req, res) => {
    const salt = bcrypt.genSaltSync(10);
    const hashing = bcrypt.hashSync(req.body.password, salt);
    Customer.findByIdAndUpdate(req.body.id, { password: hashing }, (err, callback) => {
        if (err)
            console.log(err)
        else {
            res.json({ message: "Password Updated Successfully" });
        }
    })
})
//////////////////////////////////////add comments to customer
router.post('/addCustomerComments', (req, res) => {
    let obj = {
        title: req.body.title,
        description: req.body.description
    }
    Customer.findByIdAndUpdate(req.body.customerId, obj, (err, callback) => {
        if (err)
            console.log(err)
        else {
            res.json({ message: "Comments Added Successfully" })
        }
    })
})


///////////////////////////////////////////////////update content data

router.post('/contentupdateRoute', (req, res) => {
    console.log(req.body);
    let obj = {
        url: req.body.url,
        title: req.body.title
    }
    ContentPage.findByIdAndUpdate(req.body._id, obj, (err, data) => {
        if (err) {
            console.log(err)
        }
        else {
            res.json({ message: "Content Page Updated" })
        }
    })
})

////////////////////////////////discount add

router.post('/discountAddRoute', async (req, res) => {

    // console.log(req.body)
    // discountPage.findOne({productId:req.body.productId},(err,discountData)=>{
    //     if(err)
    //         console.log(err)
    //     else{
    //         if(discountData!=null){
    //             res.json({message:"This product already have discount code"})
    //         }
    //         else{
    try {
        const discout = await discountPage.findOne({ code: req.body.code }).exec();

        if (discout) {
            res.json({ message: "Discount Code with code already exists" })
        }
        else {

            new discountPage({
                name: req.body.name,
                value: req.body.value,
                type: req.body.type,
                code: req.body.code,
                productId: req.body.productId,
                validFrom: req.body.validFrom,
                validTill: req.body.validTill,
            }).save((err, data) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.json({ message: 'Discount Code successfully added' })
                }
            })
            //         }
            //     }
            // })
        }
    }
    catch (err) {
        console.log(err.message)
    }


})


/////////////////////////discount codes view all
router.post('/discountcodeallview', (req, res) => {
    discountPage.find((err, data) => {
        if (err) {
            console.log(err)
        }
        else {
            res.json(data)
            console.log(data)
        }
    })
})


/////////////////////discount codes view specific
router.post('/discountviewspecific', (req, res) => {
    discountPage.findById(req.body._id, (err, data) => {
        if (err) {
            console.log(err)
        }
        else {
            res.json(data)
        }
    })
})
//////////////////////////update discount Code
router.post('/discountcodeupdate', (req, res) => {
    let obj = {
        name: req.body.name,
        value: req.body.value,
        type: req.body.type,
        code: req.body.code,
        productName: req.body.productName,
        validFrom: req.body.validFrom,
        validTill: req.body.validTill,
    }
    discountPage.findByIdAndUpdate(req.body.id, obj, (err, callback) => {
        if (err)
            console.log(err)
        else
            res.json({ message: "Successfully Updated" })
    })
})

/////////////////////delete Discount Code
router.post('/deleteCode', (req, res) => {
    discountPage.findByIdAndRemove(req.body._id, (err, cb) => {
        if (err)
            console.log(err)
        else
            res.json({ message: "Deleted Successfully" })
    })
})

///////////////////////////////////////update Customer Account Details
router.post('/updateCustomerDetails', (req, res) => {
    let obj = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        phone: req.body.phone
    }
    Customer.findOne({ email: obj.email }, (err, customerData) => {
        if (err)
            console.log(err)
        else {
            console.log(customerData);
            if (customerData != null && customerData._id != req.body._id)
                res.json({ message: "Email Already Registered" })
            else {
                Customer.findByIdAndUpdate(req.body.customerId, obj, (err, callback) => {
                    if (err)
                        console.log(err)
                    else
                        res.json({ message: "Updated Successfully" })
                })
            }
        }
    })
})

router.post('/addImageToProduct', upload.single('file'), (req, res) => {
    try {
        Product.findById(req.body.id, (err, data) => {
            if (err)
                throw err
            else {
                if (data) {
                    Product.findByIdAndUpdate(data._id, { $push: { sliderFilePath: res.req.file.filename } }, (err, updata) => {
                        if (err)
                            throw err
                        else
                            res.json({ message: 'Image Added', success: true });
                    })
                }
                else {
                    dir = path.join(__dirname, '..', 'public', 'uploads', res.req.file.filename);
                    fs.unlinkSync(dir, (err, somedata) => {
                        if (err)
                            throw err
                    })
                    res.json({ message: 'Product Not Found', success: false });
                }
            }
        })
    }
    catch (err) {
        console.log(err);
    }
})

router.post('/deleteImage', (req, res) => {
    try {
        Product.findById(req.body.id, (err, productData) => {
            if (err)
                console.log(err)
            else {
                if (productData.filePath == req.body.filename) {
                    res.json({ message: "Thumbnail Image can't be deleted", success: false });
                }
                else {
                    Product.findByIdAndUpdate(req.body.id, { $pull: { sliderFilePath: req.body.filename } }, (err, data) => {
                        if (err)
                            throw err
                        else {
                            dir = path.join(__dirname, '..', 'public', 'uploads', req.body.filename);
                            fs.unlinkSync(dir, (err, somedata) => {
                                if (err)
                                    throw err
                            })
                            res.json({ message: 'Deleted', success: true });
                        }
                    })
                }
            }
        })
    }
    catch (err) {
        console.log(err);
    }
})

router.post('/selectImage', (req, res) => {
    try {
        let obj = { filePath: req.body.filePath }
        Product.findByIdAndUpdate(req.body.id, obj, (err, data) => {
            if (err)
                throw err
            else
                res.json({ message: 'Thumbnail Set', success: true });
        })
    }
    catch (err) {
        console.log(err);
    }
})

//////////////////////////////////get Product Review
router.post('/getSpecificProductReview', async (req, res) => {
    try {
        let review = await Review.find({ productId: req.body.productId })
        res.json(review);
    }
    catch (err) {
        console.log(err)
    }
})
router.post('/setReviewActive', (req, res) => {
    try {

        Review.findByIdAndUpdate(req.body.id, { active: true }, (err, reviewActive) => {
            if (err)
                console.log(err)
            else {
                Review.find({ productId: reviewActive.productId, active: true }, (err, productData) => {
                    if (err)
                        console.log(err)
                    else {
                        let rating = 0;
                        let length = productData.length;
                        productData.forEach(el => {
                            if (rating == 0) {
                                rating = el.rating
                            }
                            else {
                                rating = (rating + el.rating);
                            }
                        })
                        rating = rating / length;
                        Product.findByIdAndUpdate(reviewActive.productId, { rating: Math.round(rating) }, (err, callback) => {
                            if (err)
                                console.log(err)
                            else {

                                res.json({ message: "Successfully Updated" })
                            }
                        })

                    }
                })
            }
        });


    }
    catch (err) {
        console.log(err)
    }
})

router.post('/deleteReview', async (req, res) => {
    try {

        await Review.findByIdAndRemove(req.body.id)
        res.json({ message: "Successfully Deleted" })
    }
    catch (err) {
        console.log(err)
    }
})
///////////////////////////////////////////////get All orders
router.post('/getOrders', (req, res) => {
    Order.find({paymentFlag:true},(err, data) => {
        if (err)
            console.log(err)
        else {
            res.json(data);
        }
    })
})
/////////////////////////////////update customer cart order status
router.post('/updateCartOrderStatus', (req, res) => {
    Order.findByIdAndUpdate(req.body.id, { orderStatus: req.body.orderStatus, $push: { orderStatusRecord: req.body.orderStatus } }, (err, data) => {
        if (err)
            console.log(err)
        else {
            const html = `<div style="text-align:center;">
              
              <p style="color: black;text-align: center">Your Current Order Status is (${req.body.OrderStatus})</p>
              <br>
          </div>`
            mailer.sendEmail('info@wildorganic.in', data.billingInfo.email, "Your Order Status", html);
            res.json({ message: "Successfully Updated Status" });
        }
    })
})


//////////////////////////// add dynamic order status
router.post('/addOrderStatus', (req, res) => {
    new OrderStatus({
        statusName: req.body.statusName
    }).save((err, data) => {
        if (err)
            console.log(err)
        else
            res.json({ message: "Order Status successfully Added" })
    })
})
/////////////////////////////////View Order Status
router.post('/viewOrderStatus', (req, res) => {
    OrderStatus.find((err, data) => {
        if (err)
            console.log(err)
        else {
            res.json(data)
        }
    })
})
///////////////////////delete order status
router.post('/deleteOrderStatus', (req, res) => {
    OrderStatus.findByIdAndDelete(req.body.id, (err, cb) => {
        if (err)
            console.log(err)
        else {
            res.json({ message: "Successfully Deleted" })
        }
    })
})
////////////////////////////update order Status
router.post('/updateOrderStatus', (req, res) => {
    OrderStatus.findByIdAndUpdate(req.body.id, { statusName: req.body.statusName }, (err, data) => {
        if (err)
            console.log(err)
        else {

            res.json({ message: "Successfully Updated" });
        }
    })
})

///////////////////get Specific product by id
router.post('/getSpecificProductById', (req, res) => {
    Product.findById(req.body.id, (err, data) => {
        if (err)
            console.log(err)
        else
            res.json(data)
    })
})
////////////////////////////get specific order by id
router.post('/getSpecificOrderById', (req, res) => {
    Order.findById(req.body.id, (err, data) => {
        if (err)
            console.log(err)
        else
            res.json(data)
    })
})
//////////////////////////////////////////update productstock
router.post('/updateProductStock', (req, res) => {
    let obj = {
        listPrice: req.body.product.listPrice
    }
    Product.findByIdAndUpdate(req.body.productId, obj, (err, data) => {
        if (err)
            console.log(err)
        else
            res.json({ message: "Stock Updated", success: true })
    })
})


router.post('/getValuesForSales', async (req, res) => {
    try {
        let productArr = await Product.find().exec();

        let customerArr = await Customer.find().exec();

        let topSellingArr = [];

        productArr.forEach(el => {
            el.listPrice.forEach(ele => {
                if (!ele.variantSold)
                    ele.variantSold=0;

                let obj  = {
                    name : el.name + " " + ele.variantName,
                    listPrice : ele.variantprice,
                    variantSold : ele.variantSold,
                }
                topSellingArr.push(obj);
            })
        });

        customerArr = customerArr.sort((a,b)=>b.dateAdded - a.dateAdded);
        
        topSellingArr =  topSellingArr.sort((a,b)=>b.variantSold-a.variantSold);
        
        res.json({topSellingArr,productArr,customerArr});
        
    }
    catch (err) {
        console.log(err);
    }
})

router.get('/contactUs', async (req, res) => {
    try {
        let contact = await ContactUs.find().exec();
        res.json({ message: 'DataFound', data:contact, success: true });
    }
    catch (err) {
        console.log(err);
        res.json({ message: err.message, success: false });
    }
})

router.get('/businessContactUs', async (req, res) => {
    try {
        let contact = await BusinessContactUs.find().exec();
        res.json({ message: 'DataFound', data:contact, success: true });
    }
    catch (err) {
        console.log(err);
        res.json({ message: err.message, success: false });
    }
})

router.delete('/contactUs/:id', async (req, res) => {
    try {
        const contact = await ContactUs.findByIdAndDelete(req.params.id);
        res.json({ message: 'Deleted', success: true });
    }
    catch (err) {
        console.log(err);
        res.json({ message: err.message, success: false });
    }
})


router.delete('/businessContactUs/:id', async (req, res) => {
    try {
        const contact = await BusinessContactUs.findByIdAndDelete(req.params.id);
        res.json({ message: 'Deleted', success: true });
    }
    catch (err) {
        console.log(err);
        res.json({ message: err.message, success: false });
    }
})

module.exports = router;