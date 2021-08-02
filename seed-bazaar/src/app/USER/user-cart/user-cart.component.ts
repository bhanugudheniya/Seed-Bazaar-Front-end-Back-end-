import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.css']
})
export class UserCartComponent implements OnInit {

  constructor(private user: UserService, private router: Router) { }
  userObj;
  productArr;
  total = 0;
  discountCodeArr: any = [];
  updateObj;
  discountCodeValue;
  updateIndex;

  cart: any = [];
  ngOnInit() {
    this.getUserDetails();
  }

  async getUserDetails() {

    this.user.getUserDetailsFORCART().subscribe(async res => {
      this.userObj = res;
      if (res)
        this.cart = this.userObj.cart;
      else
        this.cart = this.user.getLocalCart();


      console.log("cart ", this.cart)
      this.user.getUserCartFORCART().subscribe(async res => {

        this.productArr = res;
        console.log(res);

        this.cart = this.cart.filter(el => {
          let index = this.productArr.findIndex(ele => {
            return (el.productId == ele._id) && (el.variantIndex < ele.listPrice.length);
          })
          console.log("index", index)
          return index != -1
        })
        console.log("t cart", this.cart)


        if (this.user.userCheck()) {
          this.user.updateCompleteCart(this.cart).subscribe((res: any) => {
          })
        }
        else
          this.user.setLocalCart(this.cart)

        this.productArr.forEach((el, i) => {
          this.cart[i].listPrice = el.listPrice[this.cart[i].variantIndex].variantprice;
          console.log(el.listPrice[this.cart[i].variantIndex].variantprice);
        });
        console.log(res)
        this.calculateTotal();
        const response: any = await this.user.getAllDiscountCode();
        if (response.success)
          this.discountCodeArr = response.data;




        // i think is automatic application of discount code but im not sure
        for (let element of this.cart) {

          // console.log(element.productId);
          if (element.discountId) {

            let tempIndex = this.discountCodeArr.findIndex(el => element.discountId == el._id)
            console.log(this.discountCodeArr)
            if ((tempIndex != -1)) {
              // alert("Discount Code name Valid" + this.discountCodeArr[tempIndex].productId + " "+ this.updateObj._id)
              if (((this.discountCodeArr[tempIndex].productId == element._id) || (this.discountCodeArr[tempIndex].productId == ""))) {
                if (this.discountCodeArr[tempIndex].type == 1) {
                  element.listPrice = element.listPrice - ((element.listPrice * parseInt(this.discountCodeArr[tempIndex].value, 10)) / 100);
                  element.discountId = this.discountCodeArr[tempIndex]._id;
                }
                else if (this.discountCodeArr[tempIndex].type == 2) {
                  element.listPrice = (element.listPrice) - parseInt(this.discountCodeArr[tempIndex].value, 10);
                  element.discountId = this.discountCodeArr[tempIndex]._id;
                }
                else if (this.discountCodeArr[tempIndex].type == 3) {
                  element.listPrice = parseInt(this.discountCodeArr[tempIndex].value, 10);
                  element.discountId = this.discountCodeArr[tempIndex]._id;
                }
                element.listPrice = ((Math.round(element.listPrice * 100)) / 100);
                if (element.listPrice < 0)
                  element.listPrice = 0
                console.log(element.listPrice)

               
                // if(this.cart[this.updateIndex].listPrice<this.productArr[this.updateIndex].minimumOrderPrice)
                // {
                //   this.cart[this.updateIndex].listPrice = this.productArr[this.updateIndex].minimumOrderPrice;
                //   alert("This Is the minimum Price :" + this.productArr[this.updateIndex].minimumOrderPrice + ", It cannot be discounted further ");
                // }

                this.calculateTotal();
              }
             
            }
          }

        };

        this.user.setLocalCart(this.cart);
      })


    })
  }

  createImageLink(imgurl) {
    return (`${imgurl}`)
  }


  decrementQuantityFromCart(i) {
    if (this.cart[i].quantity > 0) {
      this.cart[i].quantity -= 1;
    }
    this.calculateTotal()
    if (this.user.userCheck()) {
      this.user.updateCompleteCart(this.cart).subscribe((res: any) => {
      })
    }
    else
      this.user.setLocalCart(this.cart)
  }

  incrementQuantityFromCart(i) {
    this.cart[i].quantity += 1;
    this.calculateTotal()
    if (this.user.userCheck()) {
      this.user.updateCompleteCart(this.cart).subscribe((res: any) => {
      })
    }
    else
      this.user.setLocalCart(this.cart)
  }

  removeFromCart(id, i, price, val) {

    // console.log(id);
    this.cart.splice(i, 1);
    this.productArr.splice(i, 1);
    this.calculateTotal()
    if (this.user.userCheck()) {
      this.user.updateCompleteCart(this.cart).subscribe((res: any) => {
      })
    }
    else
      this.user.setLocalCart(this.cart)
  }

  calculateTotal() {
    this.total = 0;
    this.cart.forEach(el => {
      // alert(el);
      console.log("asd", el)
      this.total += el.quantity * el.listPrice
    });
  }

  setUpdate(obj, i) {
    this.updateObj = obj;
    this.updateIndex = i;
    console.log(this.updateObj);
  }

  checkDiscount() {
    if (this.cart[this.updateIndex].discountId) {
      alert('Discount Code Has Already Been Applied')

    }
    else {


      console.log("running")
      console.log(this.discountCodeArr)
      let tempIndex = this.discountCodeArr.findIndex(el => el.code == this.discountCodeValue)

      if ((tempIndex != -1)) {
        // alert("Discount Code name Valid" + this.discountCodeArr[tempIndex].productId + " "+ this.updateObj._id)
        if (((this.discountCodeArr[tempIndex].productId == this.updateObj._id) || (this.discountCodeArr[tempIndex].productId == ""))) {
          if (this.discountCodeArr[tempIndex].type == 1) {
            this.cart[this.updateIndex].listPrice = this.cart[this.updateIndex].listPrice - ((this.cart[this.updateIndex].listPrice * parseInt(this.discountCodeArr[tempIndex].value, 10)) / 100);
            this.cart[this.updateIndex].discountId = this.discountCodeArr[tempIndex]._id;
          }
          else if (this.discountCodeArr[tempIndex].type == 2) {
            this.cart[this.updateIndex].listPrice = (this.cart[this.updateIndex].listPrice) - parseInt(this.discountCodeArr[tempIndex].value, 10);
            this.cart[this.updateIndex].discountId = this.discountCodeArr[tempIndex]._id;
          }
          else if (this.discountCodeArr[tempIndex].type == 3) {
            this.cart[this.updateIndex].listPrice = parseInt(this.discountCodeArr[tempIndex].value, 10);
            this.cart[this.updateIndex].discountId = this.discountCodeArr[tempIndex]._id;
          }
          this.cart[this.updateIndex].listPrice = ((Math.round(this.cart[this.updateIndex].listPrice * 100)) / 100);
          if (this.cart[this.updateIndex].listPrice < 0)
            this.cart[this.updateIndex].listPrice = 0
          console.log(this.cart[this.updateIndex].listPrice)

          alert("Discount Code Applied");
          // if(this.cart[this.updateIndex].listPrice<this.productArr[this.updateIndex].minimumOrderPrice)
          // {
          //   this.cart[this.updateIndex].listPrice = this.productArr[this.updateIndex].minimumOrderPrice;
          //   alert("This Is the minimum Price :" + this.productArr[this.updateIndex].minimumOrderPrice + ", It cannot be discounted further ");
          // }

          this.calculateTotal();
        }
        else {
          alert(`Discount Code Not Valid`)
        }
      }
      else {
        alert("Discount Code Not  for this product Valid")
      }
    }

  }


  proceedTocheckout() {
    if (this.cart.length != 0) {

      if (this.user.userCheck()) {
        this.user.updateCompleteCart(this.cart).subscribe((res: any) => {
          if (res.success) {
            this.router.navigateByUrl("/user/checkout");
          }
          else {
            alert(res.message);
          }
        })
      }
      else {
        this.cart.forEach(el => {
          delete this.cart.listPrice;
        });
        this.user.setLocalCart(this.cart)
        this.router.navigateByUrl("/user/checkout");
      }
    }
    else {
      alert("Cart is empty")
    }
  }

}

/*
checkDiscount()
    this.discountCodeArr.forEach(element => {
      if (element.name == this.discountCodeValue) {
        let dbDate = new Date(element.validTill);
        let date2 = new Date()
        if (dbDate.getTime() >= date2.getTime()) {
          if (element.type == "1") {
            this.cart.forEach(ele => {
              if (ele.productId == element.productId) {
                this.updateObj.listPrice.forEach(el => {
                  if (el.variantprice == ele.listPrice) {
                    let price = (ele.listPrice / 100) * element.value
                    let discountPrice = ele.listPrice - price;
                    alert("Discount Code Applied");
                    this.calculateTotal()
                    ele.listPrice = discountPrice;
                  }
                })
              }
            });
          }
          else if (element.type == 2) {
            this.cart.forEach(ele => {
              if (ele.productId == element.productId) {
                this.updateObj.listPrice.forEach(el => {
                  if (el.variantprice == ele.listPrice) {
                    let price = element.value
                    let discountPrice = ele.listPrice - price;
                    alert("Discount Code Applied");
                    this.calculateTotal()
                    ele.listPrice = discountPrice;
                  }
                })
              }
            });
          }
          else {
            this.cart.forEach(ele => {
              if (ele.productId == element.productId) {
                this.updateObj.listPrice.forEach(el => {
                  if (el.variantprice == ele.listPrice) {
                    let price = element.value
                    let discountPrice = price;
                    alert("Discount Code Applied");
                    this.calculateTotal()
                    ele.listPrice = discountPrice;
                  }
                })
              }
            });
          }
        }
        else {
          alert("Offer Expired");
        }
      }
      else {
        alert("Invalid Discount Code");
      }

    });
    */