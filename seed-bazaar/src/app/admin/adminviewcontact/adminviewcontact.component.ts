import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-adminviewcontact',
  templateUrl: './adminviewcontact.component.html',
  styleUrls: ['./adminviewcontact.component.css']
})
export class AdminviewcontactComponent implements OnInit {

  displayArr:any
  constructor(private admin:AdminService) { }

  ngOnInit() {
    this.getContactUs();
  }

  getContactUs()
  {
    this.admin.getContactUs().subscribe((res:any)=>{
      
      this.displayArr = res.data;
    })
  }

  deleteContactUs(id)
  {
    this.admin.deleteContactUs(id).subscribe((res:any)=>{
      alert(res.message);
      this.getContactUs();
    })
  }
}
