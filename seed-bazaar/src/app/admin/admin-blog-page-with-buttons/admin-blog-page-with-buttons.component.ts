import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-admin-blog-page-with-buttons',
  templateUrl: './admin-blog-page-with-buttons.component.html',
  styleUrls: ['./admin-blog-page-with-buttons.component.css']
})
export class AdminBlogPageWithButtonsComponent implements OnInit {
  htmlContent;
  productName;

  blogArr;
  delete:any={};
  updateObj:any={};
  productArr:any=[];
  file:any;
  constructor(private admin:AdminService) { }

  ngOnInit() {
    this.getBlog();
    this.getProduct();
  }

  getBlog()
  {
    this.admin.getBlog().subscribe((res:any)=>{
      this.blogArr = res;
      console.log(res);
    })
  }

  getProduct(){
    this.admin.getProduct().subscribe(res=>this.productArr=res)
  }
  setDelete(id,name)
  {
    this.delete._id = id;
    this.delete.name = name;
  }
  editorConfig: AngularEditorConfig = {
    editable: true,
      spellcheck: true,
      minHeight: '200px',
};
  deleteBlog()
  {
    this.admin.deleteBlog(this.delete._id);
  }
  setUpdate(obj){
    this.updateObj=obj
  }
  updateBlog(){
    this.admin.updateBlogById(this.updateObj._id,this.updateObj.name, this.updateObj.author, this.updateObj.description,this.updateObj.productName,this.updateObj.Blog)
  }
  onFileChange(event)
  {
    this.file = event.target.files[0]
    console.log(this.file);
  }
  updateBlogImage()
  {

    let formObj = new FormData()
    formObj.append('id',this.updateObj._id);
    formObj.append('file',this.file,this.file.filename);
    this.admin.updateBlogImageById(formObj);


  }
}
