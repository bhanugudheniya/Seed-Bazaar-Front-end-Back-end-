import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  // mainurl="http://3.134.89.88:3000"
  // mainurl = "https://api.shopitemonline.com";//this is the live one
  // mainurl = "https://api.nsuperfood.com"
  // mainurl = "http://192.168.1.110:3000"
  // mainurl = "http://192.168.0.101:3000"
  mainurl = "http://localhost:3000"
  guestObj: any = {};
  url = `${this.mainurl}/customer`;
  // url = "http://ec2-3-15-9-93.us-east-2.compute.amazonaws.com:3000/admin"
  constructor(private http: HttpClient, private router: Router) { }


  ///////////////////////////////////////user login and register
  userCheck(): Boolean {
    const chk = this.getJwt();
    if (chk)
      return true;
    else
      return false;
  }

  setJwt(token) {
    if (token) {
      localStorage.setItem('customer-token', token)
    }
  }

  getJwt() {
    let token = localStorage.getItem('customer-token');
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
    localStorage.removeItem('customer-token');
    // this.router.navigateByUrl('/');
    alert("You Have Been Logged Out");
    window.location.reload();
  }

  async rechargeWallet(amount) {
    let details = this.getJwt();
    if (details) {

      let userId = details._id;
      return this.http.post(`${this.url}/walletRecharge`, { amount, id: userId }).toPromise()
    }
  }

  payFromWallet(billingInfo, orderNotes, cart, cost) {
    let obj = {
      billingInfo, orderNotes, cart, cost
    }

    if (this.getJwt()) {

      return this.http.post(`${this.url}/orderNowWallet`, obj).toPromise();
    }
    else {

      alert('You need to login to use wallet')
      window.location.href = '/user/login'
    }

  }
  orderNowCod(billingInfo, orderNotes, cart, cost) {
    let obj = {
      billingInfo, orderNotes, cart, cost
    }
    if (this.getJwt()) {
      return this.http.post(`${this.url}/orderNowCod`, obj).toPromise();
    }
    else {

      alert('You need to login to use wallet')
      window.location.href = '/user/login'
    }


  }


  userRegister(firstname, lastname, email, phone, password, referalCode) {
    let obj = {
      firstname, lastname, email, phone, password, referalCode
    }
    this.http.post(`${this.url}/customerRegister`, obj).subscribe((res: any) => {
      if (res.message) {
        alert(res.message)
        this.router.navigateByUrl('/user/login')
      }
    })
  }

  userLogin(email, password) {
    let obj = { email, password }
    this.http.post(`${this.url}/customerLogin`, obj).subscribe((res: any) => {
      if (res.token) {
        this.setJwt(res.token);
        alert('logged in');
        this.router.navigateByUrl('/')
      }
      if (res.message) {
        alert(res.message)
      }
    })
  }




  //////////////////////////////////get categories

  getCategory() {
    let obj = null;
    return this.http.post(`${this.url}/getCategory`, obj)
  }
  getProductsByCategory(categoryUrl) {
    let obj = { url: categoryUrl }
    console.log(categoryUrl);
    return this.http.post(`${this.url}/getProductByCategory`, obj)
  }

  getSpecificProduct(url) {
    let obj = { url }
    return this.http.post(`${this.url}/getSpecificProduct`, obj)
  }
  getSpecificProductById(id) {
    let obj = { id }
    return this.http.post(`${this.url}/getSpecificProductById`, obj)
  }

  /////////////////////add to cart
  addCart(productId, quantity, listPrice, variantIndex) {
    let details = this.getJwt();
    if (details) {

      let userId = details._id;

      let obj = {
        userId, productId, quantity, listPrice, variantIndex
      }
      // alert(obj.variantIndex);
      this.http.post(`${this.url}/addToCart`, obj).subscribe((res: any) => {
        if (res.message) {
          alert(res.message)
          window.location.href = "/user/cart";
        }
      })
    }
    else {
      /////////////////////////
      let obj = {
        productId, quantity, variantIndex
      }
      let val = this.getLocalCart();
      if (val == null) {
        let arr = [];
        arr.push(obj);
        this.setLocalCart(arr);
        alert("ADDED TO CART");
      }
      else {
        let index = val.findIndex(el => {
          return ((el.productId == obj.productId) && (el.variantIndex == obj.variantIndex))
        })
        // alert(index);
        if (index == -1) {
          val.push(obj);
          this.setLocalCart(val);
          alert("ADDED TO CART");
        }
        else {
          val[index].quantity = val[index].quantity + obj.quantity
          this.setLocalCart(val);
          alert("ADDED ITEMS TO CART");
        }

        window.location.reload();
      }

    }
  }

  ///////////////////////////////////////index contact us
  getUserDetails() {
    let details = this.getJwt();
    if (!details) {
      alert("please Log in");
      this.router.navigateByUrl('/user/login');
    }
    let obj = {
      userId: details._id
    }
    return this.http.post(`${this.url}/getUserById`, obj);
  }

  getUserCart() {
    let details = this.getJwt();
    if (!details) {
      alert("please Log in");
      this.router.navigateByUrl('/');
    }
    let obj = {
      userId: details._id
    }
    return this.http.post(`${this.url}/getProductByUserId`, obj);
  }
  getAllProducts() {
    let obj = null
    return this.http.post(`${this.url}/viewProducts`, obj);
  }
  addProductReview(review, rating, productId) {
    {
      let details = this.getJwt();
      if (!details) {
        alert("please Log in");
        this.router.navigateByUrl('/');
      }
      let obj = {
        userId: details._id,
        review, rating, productId
      }
      this.http.post(`${this.url}/addProductReview`, obj).subscribe((res: any) => {
        if (res.message) {
          alert(res.message)
        }
      });
    }
  }
  getSpecificProductReview(productId) {
    let obj = { productId }
    return this.http.post(`${this.url}/getSpecificProductReview`, obj)
  }
  ///////////////////////////////order Now

  orderNow(billingInfo, orderNotes, cart, cost) {
    let obj = {
      billingInfo, orderNotes, cart, cost
    }
    // console.log(obj)
    this.http.post(`${this.url}/orderNow`, obj).subscribe((res: any) => {
      if (res.success == false) {
        alert(res.message)
      }
      else {
        let obj = [];
        this.setLocalCart(obj);
        window.location.href = res.redirectUrl;
      }
    })

  }

  updateUserProfile(firstname, lastname, phone, email, address) {
    let details = this.getJwt();
    if (!details) {
      alert("please Log in");
      this.router.navigateByUrl('/');
    }
    let obj = {
      userId: details._id,
      firstname, lastname, phone, email, address
    }
    // console.log(obj);
    this.http.post(`${this.url}/updateUserProfile`, obj).subscribe((res: any) => {
      if (res.message) {
        alert(res.message)
      }
    });
  }
  /////////////////////////////////////////get user orders
  getUserOrders() {
    let details = this.getJwt();
    if (!details) {
      alert("please Log in");
      this.router.navigateByUrl('/');
    }
    let obj = {
      userId: details._id,
    }
    // console.log(obj);
    return this.http.post(`${this.url}/getUserOrders`, obj);
  }
  getSpecificOrder(id) {
    let obj = { id }
    return this.http.post(`${this.url}/getSpecificOrder`, obj)
  }

  removeItemFromcart(id, listPrice, quantity) {
    let details = this.getJwt();
    if (!details) {
      alert("please Log in");
      this.router.navigateByUrl('/');
    }
    let obj = {
      productId: id, userId: details._id, listPrice, quantity
    }
    this.http.post(`${this.url}/removeItemFromCart`, obj).subscribe((res: any) => {
      if (res.message) {
        alert(res.message)
      }
    });
  }

  //////////////////////////////////////////get all discount codes
  getSpecificDiscountCode(productId) {
    let obj = { productId };
    return this.http.post(`${this.url}/getSpecificDiscountCode`, obj)
  }

  getAllDiscountCode() {

    let obj = {};
    return this.http.get(`${this.url}/getAllDiscountCode`).toPromise();
  }
  ////////////////////////////////////////////////// update cart price on discount code
  // updateCartPrice(productId){
  //   let details = this.getJwt();
  //     if (!details) {
  //       alert("please Log in");
  //       this.router.navigateByUrl('/');
  //     }
  //   let obj={
  //     userId:details._id,
  //   }
  // }
  updateCompleteCart(cart) {
    let details = this.getJwt();
    if (!details) {
      alert("please Log in");
      this.router.navigateByUrl('/');
    }
    let obj = {
      id: details._id, cart
    }
    console.log(cart)
    return this.http.post(`${this.url}/updateCompleteCart`, obj);
  }

  getLocalCart() {
    let cart = localStorage.getItem('guest-cart');
    if (cart)
      return JSON.parse(cart)
    else {
      this.setLocalCart([]);
      return ([])
    }
  }
  setLocalCart(cart) {
    console.log("service cart", cart)
    localStorage.setItem('guest-cart', JSON.stringify(cart));
  }


  getUserDetailsFORCART() {
    let details = this.getJwt();
    let obj;
    if (details)
      obj = { userId: details._id };
    else
      obj = { userId: null };

    return this.http.post(`${this.url}/getUserById`, obj);
  }

  getUserCartFORCART() {
    let details = this.getJwt();
    let obj;
    if (details)
      obj = { userId: details._id };
    else
      obj = { userId: null, cart: this.getLocalCart() };

    return this.http.post(`${this.url}/getProductByUserId`, obj);
  }


  getDataForCheckout(cart) {
    let obj = { cart }
    return this.http.post(`${this.url}/getDataForCheckout`, obj)
  }

  updateCompleteUser(userobj) {
    this.http.put(`${this.url}/updateCompleteUser`, userobj).subscribe((res: any) => {
      if (res.success)
        alert(res.message)
    })
  }

  getBlogByUrl(url) {
    return this.http.get(`${this.url}/blogByUrl/${url}`);
  }

  addContactUs(obj) {
    return this.http.post(`${this.url}/contactUs`, obj)
  }


  addbusinessContactUs(obj) {
    return this.http.post(`${this.url}/businessContactUs`, obj)
  }

  forgotPassword(email) {
    let obj = { email };
    return this.http.post(`${this.url}/forgotPassword`, obj).toPromise();
  }
  serForgotPassword(password, forgotToken) {
    let obj = { password, forgotToken }
    return this.http.post(`${this.url}/changePassword`, obj).toPromise();
  }
  searchProducts(val) {
    return this.http.get(`${this.url}/search/${val}`).toPromise();
  }

  getTime() {
    return this.http.get(`${this.url}/getTime`).toPromise()
  }


}

