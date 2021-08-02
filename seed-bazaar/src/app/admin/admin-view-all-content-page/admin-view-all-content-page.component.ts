import { Component, OnInit } from '@angular/core';
import {AdminService} from '../service/admin.service'
@Component({
  selector: 'app-admin-view-all-content-page',
  templateUrl: './admin-view-all-content-page.component.html',
  styleUrls: ['./admin-view-all-content-page.component.css']
})
export class AdminViewAllContentPageComponent implements OnInit {
contentArr;
  constructor(private admin:AdminService) { }

  ngOnInit() {
    this.getContent();
  }

  getContent(){
    this.admin.getContent().subscribe(res=>this.contentArr=res)
  }

  contentDelete(_id){
    // console.log(id);
    this.admin.deleteContentPage(_id)
  }
}
