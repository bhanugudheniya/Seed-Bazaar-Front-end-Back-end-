import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-adminregister',
  templateUrl: './adminregister.component.html',
  styleUrls: ['./adminregister.component.css']
})
export class AdminregisterComponent implements OnInit {
  name;
  email;
  password;

  constructor(private admin:AdminService) { }

  ngOnInit() {
  }

  adminRegister()
  {
   this.admin.adminRegister(this.name,this.email,this.password);
  }

}
