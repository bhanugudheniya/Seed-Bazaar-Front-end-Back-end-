import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-adminviewbusinesscontact',
  templateUrl: './adminviewbusinesscontact.component.html',
  styleUrls: ['./adminviewbusinesscontact.component.css']
})
export class AdminviewbusinesscontactComponent implements OnInit {

  displayArr:any
  constructor(private admin:AdminService) { }

  ngOnInit() {
    this.getContactUs();
  }

  getContactUs()
  {
    this.admin.getbusinessContactUs().subscribe((res:any)=>{
      this.displayArr = res.data;
    })
  }

  deleteContactUs(id)
  {
    this.admin.deletebusinessContactUs(id).subscribe((res:any)=>{
      alert(res.message);
      this.getContactUs();
    })
  }

  
}
