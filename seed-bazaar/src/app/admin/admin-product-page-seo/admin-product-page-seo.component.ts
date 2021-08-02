import { Component, OnInit } from '@angular/core';
import {AdminService} from  '../service/admin.service'
import {ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-admin-product-page-seo',
  templateUrl: './admin-product-page-seo.component.html',
  styleUrls: ['./admin-product-page-seo.component.css']
})
export class AdminProductPageSeoComponent implements OnInit {
url;
metadata=[];
metaname;
metacontent;
  productArr;
  constructor(private admin:AdminService,private route:ActivatedRoute) {
    this.url=route.snapshot.params['url'];
   }

  ngOnInit() {
    this.getProduct();
  }
  getProduct(){
    this.admin.getProductDetails(this.url).subscribe((res:any)=>{this.productArr=res;
      this.metadata=res.metadata;
      this.url = res.url;

    })
  }
  addMeta()
  {
    let obj ={
      name : this.metaname,
      content : this.metacontent
    }
    this.metadata.push(obj)
  }
  deleteMeta(i)
  {
    this.metadata.splice(i,1);
    // console.log(i);
  }
  updateProductSeo()
  {
    this.admin.updateProductSeo(this.productArr._id,this.url,this.metadata);
  }
}
