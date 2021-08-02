import { Component, OnInit } from '@angular/core';
import {AdminService} from '../service/admin.service'

@Component({
  selector: 'app-admin-content-page-with-seo',
  templateUrl: './admin-content-page-with-seo.component.html',
  styleUrls: ['./admin-content-page-with-seo.component.css']
})
export class AdminContentPageWithSeoComponent implements OnInit { 

  seoArr;
  constructor(private admin:AdminService) { }

  ngOnInit() {
    this.getContent();
  }

  getContent(){
    this.admin.getContent().subscribe(res=>{
      this.seoArr=res})
  }

}
