import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admincategorymetataginput',
  templateUrl: './admincategorymetataginput.component.html',
  styleUrls: ['./admincategorymetataginput.component.css']
})
export class AdmincategorymetataginputComponent implements OnInit {

  categoryUrl;
  categoryDetails;
  metadata=[];
  url;
  metaname;
  metacontent;
  constructor(private router:Router,route:ActivatedRoute,private admin:AdminService) { 
    this.categoryUrl=route.snapshot.params['url'];

  
  
}


  ngOnInit() {
    // console.log(this.categoryUrl);
    this.findCategoryByUrl();
  }

  findCategoryByUrl()
  {
    this.admin.findCategoryByUrl(this.categoryUrl).subscribe((res:any)=>{
      this.categoryDetails=res;
      this.metadata = res.metadata;
      this.url = res.url;
      console.log(this.categoryDetails.metadata.length);
    });
  }
  addMeta()
  {
    let obj ={
      name : this.metaname,
      content : this.metacontent
    }
    this.metadata.push(obj)
  }

  updateCategorySeo()
  {
    this.admin.updateCategorySeo(this.categoryDetails._id,this.url,this.metadata);
  }
  deleteMeta(i)
  {
    this.metadata.splice(i,1);
    // console.log(i);
  }
}
