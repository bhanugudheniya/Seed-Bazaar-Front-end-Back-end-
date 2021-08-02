import { Component, OnInit } from '@angular/core';
import {AdminService} from '../service/admin.service'
@Component({
  selector: 'app-admin-content-page-with-option',
  templateUrl: './admin-content-page-with-option.component.html',
  styleUrls: ['./admin-content-page-with-option.component.css']
})
export class AdminContentPageWithOptionComponent implements OnInit {
contentArr;

  constructor(private Admin:AdminService) { }

  ngOnInit() {
    this.getContent()
  }
  getContent(){
    this.Admin.getContent().subscribe(res=>this.contentArr=res)
  }
  toggleFunction(active,id){
    this.Admin.toggleContent(active,id).subscribe((res:any)=>{
      if(res.message){
          alert(res.message)
      }
      this.getContent();
    });
  }
}
