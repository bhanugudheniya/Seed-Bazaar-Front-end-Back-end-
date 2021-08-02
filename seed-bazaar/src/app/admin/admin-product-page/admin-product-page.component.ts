import { Component, OnInit, Input } from '@angular/core';
import { AdminService } from '../service/admin.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-admin-product-page',
  templateUrl: './admin-product-page.component.html',
  styleUrls: ['./admin-product-page.component.css']
})
export class AdminProductPageComponent implements OnInit {
  testFile;
  file: File | null;
  blog;
  name;
  productDetails;
  additionalDetails;
  listPrice;
  minimumOrderPrice=0;
  handlingFee;
  shippingFee;
  category;
  SKU;
  featured;
  freeShipping;
  reviewAllowed;
  needChanges;
  active;
  dateAdded;
  url;
  metadata;
  setCategoryArr = [];
  categoryArr;

  variantArr:any=[];
  productVariant;
  varaintPrice;
  mrp;
  varaintStock;
  varaintMinimumPrice;
  constructor(private admin: AdminService) { }

  ngOnInit() {
    this.getCategory();
  }

  createProduct() {
    // console.log(this.blog);
    if(this.file)
    {
      this.admin.createProduct(this.blog, this.name, this.productDetails, this.additionalDetails, this.variantArr, this.minimumOrderPrice, this.handlingFee, this.shippingFee, this.setCategoryArr, this.SKU, this.featured, this.freeShipping, this.reviewAllowed, this.needChanges, this.active, this.dateAdded, this.url, this.metadata, this.file)
    }
    else
    {
      alert("No File Selected");
    }
  }
  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    minHeight: '200px',
  };
  getCategory() {
    this.admin.getCategory().subscribe((res: any) => {
      this.categoryArr = res;
      // console.log(this.categoryArr);
    })
  }
  addCategory(val) {

    let obj = {
      name: val.split('.')[0],
      id:val.split('.')[1]
    }
    this.setCategoryArr.push(obj);
    console.log(this.setCategoryArr);
  }
  addVariant(variant,price,stock,mrp){
    let obj={
      variantName:variant,
      variantprice:price,
      variantmrp:mrp,
      variantStock:stock,
      variantSold : 0,
      // varaintMinimumPrice:minimum
    }
   this.variantArr.push(obj);
  }
  deleteVariant(i){
    this.variantArr.splice(i, 1);
  }


  deleteCategory(i) {
    this.setCategoryArr.splice(i, 1);
  }
  onFileChange(event)
  {
    this.file = event.target.files[0]
    console.log(this.file);
  }

}
