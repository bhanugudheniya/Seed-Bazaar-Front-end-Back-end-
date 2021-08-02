import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-userorder-history',
  templateUrl: './userorder-history.component.html',
  styleUrls: ['./userorder-history.component.css']
})
export class UserorderHistoryComponent implements OnInit {
ordersArr:any=[];
finalOrderArr:any=[];
imgurl;
userObj;
  constructor(private user:UserService,private router:Router) { }

  ngOnInit() {
    this.getUserOrders();
    this.imgurl = this.user.mainurl;
    this.getUser()
  }
  getUserOrders(){
    this.user.getUserOrders().subscribe(res=>{this.ordersArr=res;
      this.ordersArr.forEach(element => {
        // console.log(element)
        element.cart.forEach(el => {
          this.user.getSpecificProductById(el.productId).subscribe((response:any)=>{
              let obj={
                productId:response._id,
                productImage:response.filePath,
                orderId:element._id,
                orderStatus:element.orderStatus,
                quantity:el.quantity,
                variantIndex:el.variantIndex,
                listPrice:el.listPrice
              }
              this.finalOrderArr.push(obj);
              console.log(this.finalOrderArr);
          })
        });
      });
    })
  }
  getUser(){
    this.user.getUserDetails().subscribe(res=>{this.userObj=res;
      // console.log(this.userObj);
    })
  }
  logout(){
    this.user.removeJwt();
  }

  addToCart(productId,quantity,listPrice,variantIndex)
  {
    this.user.addCart(productId,quantity,listPrice,variantIndex)
  }

}
