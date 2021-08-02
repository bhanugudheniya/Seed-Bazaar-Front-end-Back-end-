import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-admincontentspecificviewdetails',
  templateUrl: './admincontentspecificviewdetails.component.html',
  styleUrls: ['./admincontentspecificviewdetails.component.css']
})
export class AdmincontentspecificviewdetailsComponent implements OnInit {
  url;
  content:any;
  constructor(private admin:AdminService,private route:ActivatedRoute) { 
    this.url=this.route.snapshot.params['url']
  }
  ngOnInit() {
this.viewcontentDetails()
  }

  viewcontentDetails(){
    this.admin.getContentDetails(this.url).subscribe(res =>{
      this.content=res;
      console.log(this.content)
    })
  }


}
