import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-admincreatecategory',
  templateUrl: './admincreatecategory.component.html',
  styleUrls: ['./admincreatecategory.component.css']
})
export class AdmincreatecategoryComponent implements OnInit {

  name;
  description;
  url;
  parentCategory:any="";
  categoryArr;
  tempCategory;
  finalParentCategoryArr:any=[];
  constructor(private admin:AdminService) { }

  ngOnInit() {
    this.getCategory()
  }
  createCategory()
  {
    if(this.finalParentCategoryArr.length!=0)
    this.admin.createCategory(this.name,this.description,this.url,this.parentCategory);
    else
    this.admin.createCategory(this.name,this.description,this.url,"");

  }
  getCategory()
  {
    this.admin.getCategory().subscribe(res=>{
      console.log(res);
      this.categoryArr=res;
      this.parentCategory="";
      this.filterCategory();
    })
  }
  
  filterCategory(){
    this.finalParentCategoryArr=this.categoryArr.filter(el=>el.parentCategory=="");
  }
  setCategory()
  {
    this.categoryArr.forEach(el => {
      if(el.name==this.parentCategory)
      {
        this.tempCategory = el;
      }
    });
  }
}
