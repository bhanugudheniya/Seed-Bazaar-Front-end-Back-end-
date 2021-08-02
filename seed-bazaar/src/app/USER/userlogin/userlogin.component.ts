import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
email;
useremail;
userpassword;
password;
firstname;
lastname;
phone;
repassword;
referalCode;

  constructor(private user:UserService) { }

  ngOnInit() {
  }
  login()
  {
    this.user.userLogin(this.useremail,this.userpassword);
  }
  userRegister(){
    if(this.password==this.repassword){

      this.user.userRegister(this.firstname,this.lastname,this.email,this.phone,this.password,this.referalCode)
    }
    else{
      alert("Password Doesn't matched")
    }
  }
}
