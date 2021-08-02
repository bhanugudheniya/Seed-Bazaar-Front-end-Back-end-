import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AdminService} from '../service/admin.service';

@Component({
  selector: 'app-content-specific-view-seo',
  templateUrl: './content-specific-view-seo.component.html',
  styleUrls: ['./content-specific-view-seo.component.css']
})
export class ContentSpecificViewSeoComponent implements OnInit {
url;
contentView;
  constructor(private route:ActivatedRoute,private admin:AdminService) { 
    this.url=route.snapshot.params['url'];
  }
  ngOnInit() {
  this.getContentDetails()
  }
    getContentDetails(){
       this.admin.getContentDetails(this.url).subscribe(res=>{this.contentView=res});
    }
  getContentPageDetails(){

  }    

}
