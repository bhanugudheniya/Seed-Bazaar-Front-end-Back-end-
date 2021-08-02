import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  email;
  password;
  constructor(private admin:AdminService) { }

  ngOnInit() {
  }

  login()
  {
    this.admin.adminLogin(this.email,this.password);
  }
}
