import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent implements OnInit {
firstname;
lastname;
email;
password;
phone;
referalCode;
  constructor(private user:UserService) { }

  ngOnInit() {
  }
  userRegister(){
    this.user.userRegister(this.firstname,this.lastname,this.email,this.phone,this.password,this.referalCode)
  }
}
