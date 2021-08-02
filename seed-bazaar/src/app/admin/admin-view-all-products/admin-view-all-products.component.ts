import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';
declare var $: any;

@Component({
  selector: 'app-admin-view-all-products',
  templateUrl: './admin-view-all-products.component.html',
  styleUrls: ['./admin-view-all-products.component.css']
})
export class AdminViewAllProductsComponent implements OnInit {
  
  blog = "fghjk";
  category;
  search;
  order:String='name';
  reverse: boolean = false;
  file;
  productArr;
  productId;
  productUpdate:any;
  updateFlag=true;
  categoryArr;
  setCategoryArr=[];
  imageObj:any={};
  listPriceArr:any=[];
  variantObj:any={};
  variantIndex=0;
  variantName;
  variantprice;
  constructor(private admin:AdminService) { }

  ngOnInit() {
    this.getProducts();
    this.getCategory();
    console.warn(this.admin.url)
  }
  editorConfig: AngularEditorConfig = {
    editable: true,
      spellcheck: true,
      minHeight: '200px',
};
  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }
  
    this.order = value;
  }
  getProducts()
  {
    this.admin.getProduct().subscribe((res:any)=>{
      this.productArr = res;
      console.log(res)
      this.productUpdate = this.productArr[0];
      // this.setCategoryArr=this.productArr[0]
    })
  }
  getCategory()
  {
    this.admin.getCategory().subscribe((res:any)=>{
      this.categoryArr = res;
      // console.log(this.categoryArr);
    })
  }
  setDelete(_id)
  {
    this.productId = _id
  }
  deleteProduct()
  {
    this.admin.deleteProduct(this.productId);
  }
  setUpdate(obj)
  {
    this.productUpdate = obj; 
    console.log(this.productUpdate);
    this.blog=obj.blog,
    this.setCategoryArr=obj.category
    this.listPriceArr=obj.listPrice

  }
  updateProduct(id)
  {
    this.admin.updateProduct(
      this.blog,
      id,
      this.productUpdate.name,
      this.productUpdate.productDetails,
      this.productUpdate.additionalDetails,
      this.listPriceArr,
      this.productUpdate.minimumOrderPrice,
      this.productUpdate.handlingFee,
      this.productUpdate.shippingFee,
      this.setCategoryArr,
      this.productUpdate.SKU,
      this.productUpdate.featured,
      this.productUpdate.freeShipping,
      this.productUpdate.reviewAllowed,
      this.productUpdate.needChanges,
      
    )
  }
  addCategory(val){
    let obj = {
      name: val.split('.')[0],
      id:val.split('.')[1]
    }
    this.setCategoryArr.push(obj);
  }
  deleteCategory(i){
    this.setCategoryArr.splice(i,1);
  }
  addVariant(variantName,variantprice){
    let obj={
      variantName:variantName,
      variantprice:variantprice,
      variantSold : 0,
      variantStock:0,
    }
    this.listPriceArr.push(obj)
  }
  deleteVariant(i){
    this.listPriceArr.splice(i,1);
  }
  setImage(obj)
  {
    this.imageObj = obj; 
    console.log(this.imageObj);
  }
  onFileChange(event )
  {
    this.file = event.target.files[0]
    console.log(this.file)
  }
  addImageToProduct()
  {
    if(this.file)
    {
      this.admin.addImageToProduct(this.imageObj._id,this.file).subscribe((res:any)=>{
        if(res.message)
        alert(res.message)
        this.ngOnInit();
      })
    }
    else
    {
      alert("No File Selected");
    }
  }
  editVariant(obj,i,productId)
  {
    $('.bd-example-modal-xl').modal('hide');
    $('#variantUpdate').modal('show');
    this.variantObj=obj;
    this.variantIndex=i;
    this.productId=productId;
  }
  showImageUpdate(file){
    return `${file}`;
  }
  updateImage(file,id){
    this.admin.updateProductThumbImage(file,id);
  }
  deleteImage(file,id){
    this.admin.deleteProductImage(file,id);
  }
  updateVariant(){
    this.variantObj.variantName=this.variantName;
    this.variantObj.variantprice=this.variantprice;
    $('#variantUpdate').modal('hide');
    // $('.bd-example-modal-xl').modal('show');
    this.updateProduct(this.productId);

  }
}

