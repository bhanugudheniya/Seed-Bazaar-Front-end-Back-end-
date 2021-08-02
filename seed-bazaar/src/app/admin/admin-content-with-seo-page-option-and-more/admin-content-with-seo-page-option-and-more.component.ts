import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {AdminService} from '../service/admin.service';
@Component({
  selector: 'app-admin-content-with-seo-page-option-and-more',
  templateUrl: './admin-content-with-seo-page-option-and-more.component.html',
  styleUrls: ['./admin-content-with-seo-page-option-and-more.component.css']
})
export class AdminContentWithSeoPageOptionAndMoreComponent implements OnInit {
  url;
  metadata:any=[];
  metaname;
  metacontent;
    contentArr;

  constructor(private router:ActivatedRoute,private admin:AdminService) {
    this.url=router.snapshot.params['url'];
   }

  ngOnInit() {
    this.getContent()
  }
  getContent(){
    this.admin.getContentDetails(this.url).subscribe((res:any)=>{this.contentArr=res;
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
    this.metadata.push(obj);
    console.log(this.metadata);
  }
  deleteMeta(i)
  {
    this.metadata.splice(i,1);
    // console.log(i);
  }
  updateContentSeo()
  {
    this.admin.updateContentSeo(this.contentArr._id,this.url,this.metadata);
  }  

}
