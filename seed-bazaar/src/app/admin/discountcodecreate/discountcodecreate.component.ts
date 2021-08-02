import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-discountcodecreate',
  templateUrl: './discountcodecreate.component.html',
  styleUrls: ['./discountcodecreate.component.css']
})
export class DiscountcodecreateComponent implements OnInit {
  name;
  value;
  type;
  productId="";
  validFrom;
  validTill;
  code;
  productArr:any=[];

  constructor( private admin:AdminService) { }

  ngOnInit() {
    this.getProducts();
  }

  discountadd(){
  // console.log(this.productId)
    this.admin.addDiscount(this.name,this.value,this.code, this.type,this.productId,this.validFrom,this.validTill)

  }
  getProducts(){
    this.admin.getProduct().subscribe(res=>{this.productArr=res})
  }

}
