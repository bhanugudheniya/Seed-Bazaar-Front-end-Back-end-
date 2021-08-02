import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';


@Component({
  selector: 'app-admin-view-all-products-seo',
  templateUrl: './admin-view-all-products-seo.component.html',
  styleUrls: ['./admin-view-all-products-seo.component.css']
})
export class AdminViewAllProductsSeoComponent implements OnInit {

  productArr;
  search;
  order:String='name';
  reverse: boolean = false;

  constructor(private admin:AdminService) { }

  ngOnInit() {
    this.getProduct()
  }
  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }
  
    this.order = value;
  }
  getProduct(){
    this.admin.getProduct().subscribe(res=>{this.productArr=res;
      console.log(this.productArr);
    })
  }

}
