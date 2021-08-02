import { Component, OnInit } from '@angular/core';
 import {AdminService} from '../service/admin.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-admincontentpageupdate',
  templateUrl: './admincontentpageupdate.component.html',
  styleUrls: ['./admincontentpageupdate.component.css']
})
export class AdmincontentpageupdateComponent implements OnInit {
url;
title;
_id;
obj;
  constructor(private  admin:AdminService ,private route:ActivatedRoute) { 
    this.url=this.route.snapshot.params['url'];
  }


  ngOnInit() {
    this.viewcontentDetails()
  }

  viewcontentDetails(){
    this.admin.getContentDetails(this.url).subscribe((res:any)=>{
    this.title=res.title;
    this._id = res._id
  })
  }

  updatecontentDetails(){
    this.admin.updateContentDetails(this._id,this.title,this.url)
    
  }
}

