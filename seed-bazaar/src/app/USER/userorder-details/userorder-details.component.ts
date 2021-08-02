import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userorder-details',
  templateUrl: './userorder-details.component.html',
  styleUrls: ['./userorder-details.component.css']
})
export class UserorderDetailsComponent implements OnInit {
  orderId;
  productId;
  finalObj:any={};
imgurl;
  userObj;
  orderArr;
  constructor(private user:UserService,private route:ActivatedRoute) {
    this.orderId=route.snapshot.params['orderId'];
    this.productId=route.snapshot.params['productId'];
   }

  ngOnInit() {
    this.getSpecificOrder();
    this.imgurl = this.user.mainurl;
    this.getUser();
  }
  getSpecificOrder(){
    this.user.getSpecificOrder(this.orderId).subscribe((res:any)=>{this.orderArr=res;
      console.log("Order Array???",this.orderArr);
      this.user.getSpecificProductById(this.productId).subscribe((response:any)=>{
        this.orderArr.cart.forEach(element => {
          if(element.productId==this.productId){
            this.finalObj={
              productName:response.name,
              productImage:response.filePath,
              listPrice:element.listPrice,
              shippingPrice:response.shippingFee,
              address:res.billingInfo,
              orderStatusRecord:res.orderStatusRecord
            }
          }
        });
        console.log(this.finalObj);
        console.log(this.finalObj);
      })
    })
  }
  getUser(){
    this.user.getUserDetails().subscribe(res=>{this.userObj=res;
      console.log(this.userObj);
    })
  }
  logout(){
    this.user.removeJwt();
  }
}
