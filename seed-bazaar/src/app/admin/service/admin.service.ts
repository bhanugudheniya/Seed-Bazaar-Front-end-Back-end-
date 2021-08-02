import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UrlService } from '../../services/url.service'
@Injectable({
    providedIn: 'root'
})
export class AdminService {

    // mainurl="http://api.wildorganic.in"

    // mainurl="https://api.shopitemonline.com"



    // mainurl="http://34.207.191.60:3000" // this is the live one
    // mainurl = "http://192.168.1.110:3000"



    url = `${this.mainurl.url}/admin`;
    // url = "http://ec2-3-15-9-93.us-east-2.compute.amazonaws.com:3000/admin"
    constructor(private http: HttpClient, private router: Router, public mainurl: UrlService) { }

    markOrderAsCompleted(id) {
        return this.http.patch(`${this.url}/orderCompleted/${id}`, {}).toPromise();
    }

    setJwt(token) {
        if (token) {
            // token
            localStorage.setItem('admin-token', token);
        }
        else {
            alert('No token Recieved');
        }
    }
    //returns the payload that is the details of user in local storage
    getJwt() {
        let token = localStorage.getItem('admin-token');
        if (token) {
            let payload = token.split('.')[1]
            payload = window.atob(payload)
            // window.atob(res.token)
            return JSON.parse(payload);
        }
        else {
            return null
        }
    }
    //removes jwt auth token from local storage signifing logout
    removeJwt() {
        // window.localStorage.removeItem('admin-token');
        localStorage.removeItem('admin-token');
        // this.router.navigateByUrl('/');
    }
    // this returns the users details form local storage
    getDetails() {
        let details = this.getJwt()
        return details;
    }

    adminRegister(name, email, password) {
        let obj = {
            name: name,
            email: email,
            password: password,
        }
        console.log("Registering");
        this.http.post(`${this.url}/register`, obj).subscribe((res: any) => {
            if (!res.success) {
                alert(res.message)
            }
            else {
                alert(res.message);
                this.router.navigateByUrl('/admin/login');
            }
        })
    }

    adminLogin(email, password) {
        let obj = { email, password: password };
        this.http.post(`${this.url}/login`, obj).subscribe((res: any) => {
            if (res.message) {
                alert(res.message);
            }
            else {
                this.setJwt(res.token);
                console.log(res);
                this.router.navigateByUrl('/admin/dashboard');
                alert('logged in');
            }
        })
    }

    //logout User
    logout() {
        this.removeJwt();
        this.router.navigateByUrl('/admin/login');
    }

    createCategory(name, description, url, parentCategory) {
        let obj = {
            name,
            description,
            url,
            parentCategory
        }
        this.http.post(`${this.url}/createCategory`, obj).subscribe((res: any) => {
            alert(res.message);
            window.location.reload();
        });

    }

    getCategory() {
        return this.http.post(`${this.url}/viewCategory`, null);
    }

    updateCategory(_id, name, description, url, parentCategory) {
        let obj = {
            _id, name, description, url, parentCategory
        }
        this.http.post(`${this.url}/updateCategory`, obj).subscribe((res: any) => {
            alert(res.message)
            if (res.success)
                window.location.reload();
        })
    }
    deleteCategory(id) {

        let obj = {
            _id: id
        }
        this.http.post(`${this.url}/deleteCategory`, obj).subscribe((res: any) => {
            alert(res.message);
            if (res.success)
                window.location.reload();
        });
    }

    getAdmins() {
        return this.http.post(`${this.url}/viewAdmin`, null);
    }
    deleteAdmin(_id) {
        let obj = {
            _id
        }
        this.http.post(`${this.url}/deleteAdmin`, obj).subscribe((res: any) => {
            alert(res.message);
            window.location.reload();
        });
    }

    toggleCategoryActive(_id, active) {
        let obj = { _id, active };
        return this.http.post(`${this.url}/toggleCategoryActive`, obj)
    }
    findCategoryByUrl(url) {
        let obj = { url }
        return this.http.post(`${this.url}/findCategoryByUrl`, obj);
    }
    updateCategorySeo(_id, url, metadata) {
        let obj = { _id, url, metadata };
        this.http.post(`${this.url}/updateCategorySeo`, obj).subscribe((res: any) => {
            alert(res.message);
            if (res.success)
                this.router.navigateByUrl('/admin/category/seo');
        })

    }
    createProduct(blog, name, productDetails, additionalDetails, listPrice, minimumOrderPrice, handlingFee, shippingFee, category, SKU, featured, freeShipping, reviewAllowed, needChanges, active, dateAdded, url, metadata, file) {
        // let obj = {
        //   blog,name, productDetails, additionalDetails, listPrice, minimumOrderPrice, handlingFee, shippingFee, category, SKU, featured, freeShipping, reviewAllowed, needChanges, active, dateAdded, url, metadata , file
        // }

        let obj = new FormData();
        obj.append("name", name);
        obj.append("url", url);
        obj.append("blog", blog);
        obj.append("productDetails", productDetails);
        obj.append("additionalDetails", additionalDetails);
        obj.append("listPrice", JSON.stringify(listPrice));
        obj.append("minimumOrderPrice", minimumOrderPrice);
        obj.append("handlingFee", handlingFee);
        obj.append("shippingFee", shippingFee);
        obj.append("category", JSON.stringify(category));
        obj.append("SKU", SKU);
        obj.append("featured", featured);
        obj.append("freeShipping", freeShipping);
        obj.append("reviewAllowed", reviewAllowed);
        obj.append("needChanges", needChanges);
        obj.append("active", active);
        obj.append("dateAdded", dateAdded);
        obj.append("metadata", metadata);
        obj.append("file", file, file.name);
        // obj.append("nightFee", nightFee);


        this.http.post(`${this.url}/addProduct`, obj).subscribe((res: any) => {
            alert(res.message);
            if (res.success == true)
                this.router.navigateByUrl('/admin/product/view');
        });
    }

    getProduct() {
        return this.http.post(`${this.url}/viewProducts`, null);
    }
    deleteProduct(_id) {
        let obj = { _id }
        this.http.post(`${this.url}/deleteProduct`, obj).subscribe((res: any) => {
            alert(res.message);
            if (res.success == true)
                window.location.reload();
        });
    }
    updateProduct(blog, _id, name, productDetails, additionalDetails, listPrice, minimumOrderPrice, handlingFee, shippingFee, category, SKU, featured, freeShipping, reviewAllowed, needChanges) {

        let obj = { blog, _id, name, productDetails, additionalDetails, listPrice, minimumOrderPrice, handlingFee, shippingFee, category, SKU, featured, freeShipping, reviewAllowed, needChanges }
        // console.log(obj);
        this.http.post(`${this.url}/updateProduct`, obj).subscribe((res: any) => {
            if (res.success == true)
                alert(res.message);
            // window.location.reload();
        })

    }
    ///////////////////////////////////////////////////////// add blog
    createBlog(name, author, description, productName, Blog, url, file) {
        // let obj = {
        //   name, author, description, productName, Blog, url
        // }
        let obj = new FormData();
        obj.append("name", name);
        obj.append("author", author);
        obj.append("description", description);
        obj.append("productName", productName);
        obj.append("Blog", Blog);
        obj.append("url", url);
        obj.append("file", file, file.filename);
        this.http.post(`${this.url}/addBLog`, obj).subscribe((res: any) => {
            alert(res.message);
            if (res.success == true)
                this.router.navigateByUrl('/admin/blog/view');
        });
    }

    ///////////////////////////get Specific product by url
    getProductDetails(url) {
        let obj = {
            url
        }
        return this.http.post(`${this.url}/findProductByUrl`, obj)
    }

    ///////////////////////////////////// get blog
    getBlog() {
        return this.http.post(`${this.url}/viewBlog`, null);
    }
    ////////////////////////////////////////// delete blog
    deleteBlog(_id) {
        let obj = {
            _id
        }
        this.http.post(`${this.url}/deleteBlogById`, obj).subscribe((res: any) => {
            alert(res.message);
            if (res.success == true)
                window.location.reload();
        })
    }

    updateBlogById(blogId, name, author, description, productName, Blog) {
        let obj = {
            blogId, name, author, description, productName, Blog
        }
        this.http.post(`${this.url}/updateBlogById`, obj).subscribe((res: any) => {
            alert(res.message);
            if (res.success == true)
                this.router.navigateByUrl('/admin/blog/view');
        });
    }

    async updateBlogImageById(formObj) {

        const res: any = await this.http.post(`${this.url}/updateBlogImageById`, formObj).toPromise();
        console.log(res)
        alert(res.message)

    }

    /////////////////////////////toggle product
    toggleProductActive(value, id) {
        let obj = { active: value, _id: id }
        this.http.post(`${this.url}/toggleProductActive`, obj).subscribe(res => window.location.reload());
    }

    /////////////////////////////update Product Seo
    updateProductSeo(_id, url, metadata) {
        let obj = { _id, url, metadata };
        this.http.post(`${this.url}/updateProductSeo`, obj).subscribe((res: any) => {
            alert(res.message);
            if (res.success)
                this.router.navigateByUrl('/admin/product/seo');
        })

    }
    addContent(content, url, title) {
        let obj = {
            content, url, title
        }
        this.http.post(`${this.url}/addContentPage`, obj).subscribe((res: any) => {
            console.log("dlskakldsal");
            if (res.message)
                alert(res.message)
        })
    }
    getContent() {
        let obj = null;
        return this.http.post(`${this.url}/getContentPage`, obj);
    }
    toggleContent(active, id) {
        let obj = {
            active, id
        }
        return this.http.post(`${this.url}/toggleActiveContent`, obj)
    }
    //////////////////////////////////////get specific Content
    getContentDetails(url) {
        let obj = {
            url
        }
        return this.http.post(`${this.url}/findContentByUrl`, obj)
    }
    ///////////////////////////////// delete  content

    deleteContentPage(_id) {
        let obj = {
            _id
        }
        this.http.post(`${this.url}/deleteContentPost`, obj).subscribe((res: any) => {
            if (res.message) {
                alert(res.message);
                window.location.reload();
            }
        })
    }
    ///////////////////////update content seo
    updateContentSeo(_id, url, metadata) {
        let obj = { _id, url, metadata };
        this.http.post(`${this.url}/updateMetaContent`, obj).subscribe((res: any) => {
            alert(res.message);
            if (res.success)
                this.router.navigateByUrl('/admin/content/seo');
        })

    }



    getCustomers() {
        let obj = null;
        return this.http.post(`${this.url}/getCustomers`, obj)
    }

    ////////////////////updateCustomers
    updateCustomer(firstname, lastname, email, phone, customerId) {
        let obj = {
            firstname, lastname, email, phone, customerId
        }
        this.http.post(`${this.url}/updateCustomerDetails`, obj).subscribe((res: any) => {
            if (res.message) {
                alert(res.message);
                // window.location.reload();
            }
        })
    }
    //////////////////////////////delete Account
    deleteCustomerAccount(id) {
        let obj = { customerId: id }
        console.log(obj);
        this.http.post(`${this.url}/deleteCustomer`, obj).subscribe((res: any) => {
            if (res.message) {
                alert(res.message)
            }
        })
    }
    /////////////////////////////update content
    updateContentDetails(_id, title, url) {
        let obj = {
            _id,
            title, url
        }
        this.http.post(`${this.url}/contentupdateRoute`, obj).subscribe((res: any) => {
            if (res.message) {
                alert(res.message)
                this.router.navigateByUrl('/admin/content/view')
            }
        })
    }


    ///////////////////////////discount create

    addDiscount(name, value, code, type, productId, validFrom, validTill) {
        let obj = { name, value, type, code, productId, validFrom, validTill }
        this.http.post(`${this.url}/discountAddRoute`, obj).subscribe((res: any) => {
            if (res.message) {
                alert(res.message)
            }
        })
    }
    /////////////////////discount View all

    getdiscountcodes() {
        let obj = null
        return this.http.post(`${this.url}/discountcodeallview`, obj)
    }


    ////////////////////discount view specific

    getdiscountspecific(_id) {
        let obj = {
            _id
        }
        return this.http.post(`${this.url}/discountviewspecific`, obj)
    }
    ////////////////////discountcode update
    update_discount(id, name, type, code, value, productName, validFrom, validTill) {

        let obj = {
            id, name, code, value, productName, validFrom, validTill, type
        }
        console.log(obj);
        return this.http.post(`${this.url}/discountcodeupdate`, obj).subscribe((res: any) => {
            if (res.message) {
                alert(res.message);
            }
        });
    }
    deleteDiscount(id) {
        let obj = {
            _id: id
        }
        this.http.post(`${this.url}/deleteCode`, obj).subscribe((res: any) => {
            if (res.message) {
                alert(res.message);
                window.location.reload();
            }
        })
    }
    resetCustomerPassword(id, password) {
        let obj = { id, password }
        this.http.post(`${this.url}/resetPassword`, obj).subscribe((res: any) => {
            if (res.message) {
                alert(res.message)
            }
        })
    }

    addImageToProduct(id, file) {
        let obj = new FormData()
        obj.append("id", id);
        obj.append("file", file, file.filename);

        return this.http.post(`${this.url}/addImageToProduct`, obj)
    }
    getSpecificProductReview(productId) {
        let obj = { productId }
        return this.http.post(`${this.url}/getSpecificProductReview`, obj)
    }
    setReviewActive(id) {
        let obj = { id }
        this.http.post(`${this.url}/setReviewActive`, obj).subscribe((res: any) => {
            if (res.message) {
                alert(res.message)
            }
        })
    }
    deleteReview(id) {
        let obj = { id }
        this.http.post(`${this.url}/deleteReview`, obj).subscribe((res: any) => {
            if (res.message) {
                alert(res.message)
            }
        })
    }
    /////////////////////////////////////////////Handling orders
    getOrders() {
        let obj = null;
        return this.http.post(`${this.url}/getOrders`, obj)
    }
    getSpecificProductById(id) {
        let obj = { id }
        return this.http.post(`${this.url}/getSpecificProductById`, obj)
    }
    ////////////////////admin service

    AddOrderStatus(Order) {
        let obj1 = { statusName: Order }
        this.http.post(`${this.url}/addOrderStatus`, obj1).subscribe((res: any) => {
            if (res.message) {
                alert(res.message);
                window.location.reload();
            }
        });
    }
    ///////////////////////////////////admin order status get
    getOrderStatus() {
        let obj = null;
        return this.http.post(`${this.url}/viewOrderStatus`, obj)

    }
    //////////////////////////////////update order Status
    updateOrderStatus(orderStatus, id) {
        let obj = {
            orderStatus, id
        }
        this.http.post(`${this.url}/updateCartOrderStatus`, obj).subscribe((res: any) => {
            if (res.message) {
                alert(res.message)
            }
        })
    }
    getSpecificOrderById(id) {
        let obj = { id }
        return this.http.post(`${this.url}/getSpecificOrderById`, obj)
    }
    deleteOrderStatus(_id) {
        let obj1 = {
            id: _id
        }
        return this.http.post(`${this.url}/deleteOrderStatus`, obj1).subscribe((res: any) => {
            alert(res.message);
            if (res.message)
                window.location.reload();
        });
    }
    ///////////////////////////////////////update product Stock
    updateProductStock(product, productId) {
        let obj = {
            product, productId
        }
        this.http.post(`${this.url}/updateProductStock`, obj).subscribe((res: any) => {
            if (res.success) {
                alert(res.message);
            }
        })
    }

    /////////////////////////////////////////update product thumb image
    updateProductThumbImage(file, id) {
        let obj = {
            filePath: file, id
        }
        this.http.post(`${this.url}/selectImage`, obj).subscribe((res: any) => {
            if (res.success) {
                alert(res.message);
            }
        })
    }
    deleteProductImage(file, id) {
        let obj = {
            filename: file, id
        }
        this.http.post(`${this.url}/deleteImage`, obj).subscribe((res: any) => {
            if (res.success) {
                alert(res.message);
            }
            else {
                alert(res.message);
            }
        })
    }

    getDashboardDetails() {
        let obj = null
        return this.http.post(`${this.url}/getValuesForSales`, obj);
    }

    getContactUs() {
        return this.http.get(`${this.url}/contactUs`);
    }

    deleteContactUs(id) {
        return this.http.delete(`${this.url}/contactUs/${id}`);
    }

    getbusinessContactUs() {
        return this.http.get(`${this.url}/businessContactUs`);
    }

    deletebusinessContactUs(id) {
        return this.http.delete(`${this.url}/businessContactUs/${id}`);
    }


}
