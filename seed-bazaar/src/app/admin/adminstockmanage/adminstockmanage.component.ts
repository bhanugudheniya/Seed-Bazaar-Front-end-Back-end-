import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-adminstockmanage',
  templateUrl: './adminstockmanage.component.html',
  styleUrls: ['./adminstockmanage.component.css']
})
export class AdminstockmanageComponent implements OnInit {
productsArr:any=[];
updateObj:any={};
listPriceIndex=0;
productArrIndex=0;
productId;
variantStock;
  constructor(private admin:AdminService) { }

  ngOnInit() {
    this.getProducts();
  }
  getProducts(){
    this.admin.getProduct().subscribe(res=>this.productsArr=res);    
  }
  setUpdate(obj,j,i,_id){
    this.updateObj=obj;
    this.listPriceIndex=j;
    this.productArrIndex=i;
    this.productId=_id;

  }
  updateStock(){
    this.productsArr[this.productArrIndex].listPrice[this.listPriceIndex].variantStock=this.variantStock;
    this.admin.updateProductStock(this.productsArr[this.productArrIndex],this.productId);
  }
}
