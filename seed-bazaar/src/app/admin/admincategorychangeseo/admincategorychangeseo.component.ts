import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-admincategorychangeseo',
  templateUrl: './admincategorychangeseo.component.html',
  styleUrls: ['./admincategorychangeseo.component.css']
})
export class AdmincategorychangeseoComponent implements OnInit {
  search;
  order:String='name';
  reverse: boolean = false;
  categoryArr
  delete:any={};
  update:any={};
  constructor(private admin:AdminService) { }

  ngOnInit() {
    this.getCategory();
  }
  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }


  getCategory()
  {
    this.admin.getCategory().subscribe(res=>{
      this.categoryArr=res;
      console.log(this.categoryArr);
      console.log(this.categoryArr[0]);
      this.setUpdate(this.categoryArr[0]._id,this.categoryArr[0].name,this.categoryArr[0].description,this.categoryArr[0].url,this.categoryArr[0].parentCategory);
      this.setDelete(this.categoryArr[0]._id,this.categoryArr[0].name);
    })
  }

  deleteCategory(id)
  {
    this.admin.deleteCategory(id);
  }

  setUpdate(id,name,description,url,parentCategory)
  {
    this.update._id = id;
    this.update.name =name;
    this.update.description =description;
    this.update.url =url;
    this.update.parentCategory =parentCategory;
  }

  setDelete(id,name)
  {
    this.delete._id = id;
    this.delete.name = name;

  }

  updateCategory()
  {
    this.admin.updateCategory(this.update._id,this.update.name,this.update.description,this.update.url,this.update.parentCategory )
  }




}
