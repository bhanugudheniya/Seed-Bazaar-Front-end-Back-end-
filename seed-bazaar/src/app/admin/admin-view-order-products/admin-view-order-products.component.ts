import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-admin-view-order-products',
  templateUrl: './admin-view-order-products.component.html',
  styleUrls: ['./admin-view-order-products.component.css']
})
export class AdminViewOrderProductsComponent implements OnInit {
orderId;
ordersArr;
productsArr:any=[];
  constructor(private router:ActivatedRoute,private admin:AdminService) {
    this.orderId=router.snapshot.params['id']
   }

  ngOnInit() {
    this.getSpecificOrder();
  }
  getSpecificOrder(){
    this.admin.getSpecificOrderById(this.orderId).subscribe(res=>{this.ordersArr=res;
      console.log(res)
      this.ordersArr.cart.forEach(element => {
        console.log(element)
      // console.log(element.productId)
      this.admin.getSpecificProductById(element.productId).subscribe((ele:any)=>{
        console.log(ele)
        let obj={
          productName:element.name,
          quantity:element.quantity,
          price:ele.listPrice[element.variantIndex].variantprice,
          shippingprice:ele.shippingFee
        }
        this.productsArr.push(obj);
      });
    });
    })
  }
  viewProducts(order){
    
  }

}
