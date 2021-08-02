import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admindiscountcode-view-all',
  templateUrl: './admindiscountcode-view-all.component.html',
  styleUrls: ['./admindiscountcode-view-all.component.css']
})
export class AdmindiscountcodeViewAllComponent implements OnInit {
  discountCodeArr;
  updateObj:any={};
  productArr:any=[];
  productName;
  type;
  constructor(private admin:AdminService , private route:ActivatedRoute) {

   }

  ngOnInit() {
    this.getDicountCodes();
    this.getProducts();
  }

  getDicountCodes()
  {
    this.admin.getdiscountcodes().subscribe((res:any)=>{
      this.discountCodeArr = res;
      console.log(this.discountCodeArr)
    })
  }
  getProducts(){
    this.admin.getProduct().subscribe(res=>{this.productArr=res})
  }

  setUpdate(obj){
    this.updateObj=obj
  }
  discountCodeUpdate(id){
    this.admin.update_discount(id,this.updateObj.name,this.type,this.updateObj.code,this.updateObj.value,this.productName,this.updateObj.validFrom,this.updateObj.validTill)
  }
  deleteCode(id){
    this.admin.deleteDiscount(id)
  }
}
