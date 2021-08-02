import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-admincreateblog',
  templateUrl: './admincreateblog.component.html',
  styleUrls: ['./admincreateblog.component.css']
})
export class AdmincreateblogComponent implements OnInit {
  htmlContent;
  name;
  author;
  file: File | null;
  description;
  productName;
  productArr;
  url;
  constructor(private admin:AdminService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts()
  {
    this.admin.getProduct().subscribe((res:any)=>{
      this.productArr = res;
    })
  }

editorConfig: AngularEditorConfig = {
    editable: true,
      spellcheck: true,
      minHeight: '200px',
};

addBlog()
{
  if(this.file)
  this.admin.createBlog(this.name,this.author,this.description,this.productName,this.htmlContent,this.url,this.file);
}

  onFileChange(event)
  {
    this.file = event.target.files[0]
    console.log(this.file);
  }
}
