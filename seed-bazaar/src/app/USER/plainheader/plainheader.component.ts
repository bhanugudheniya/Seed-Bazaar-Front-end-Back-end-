import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-plainheader',
  templateUrl: './plainheader.component.html',
  styleUrls: ['./plainheader.component.css']
})
export class PlainheaderComponent implements OnInit {
  windowWidth = 0;
  headerItemVisible=false;





  userObj;
  productArr;
  total = 0;
  discountCodeArr: any = [];
  updateObj;
  discountCodeValue;
  updateIndex;

  cart: any = [];


  constructor(private user: UserService, private router: Router) { }

  ngOnInit() {
    this.windowWidth = window.innerWidth;
    this.getUserDetails();
}



async getUserDetails() {

  this.user.getUserDetailsFORCART().subscribe(async res => {
    this.userObj = res;
    if (res)
      this.cart = this.userObj.cart;
    else
      this.cart = this.user.getLocalCart();


    console.log("cart From Header ", this.cart)
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




calculateTotal() {
  this.total = 0;
  this.cart.forEach(el => {
    // alert(el);
    console.log("asd", el)
    this.total += el.quantity * el.listPrice
  });
}


toggleHeader(){
  this.headerItemVisible=!this.headerItemVisible;
}

}
