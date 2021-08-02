import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-my-account-address',
  templateUrl: './my-account-address.component.html',
  styleUrls: ['./my-account-address.component.css']
})
export class MyAccountAddressComponent implements OnInit {
userObj:any={};
  constructor(private user:UserService) { }

  ngOnInit() {
    this.getUser();
  }
  getUser(){
    this.user.getUserDetails().subscribe(res=>{this.userObj=res;
      if(!this.userObj.address){
        console.log("IN")
        this.userObj.address={
          address1:'',
          address2:'',
          city:'',
          zipCode:'',
          state:''
        };
      //   this.userObj.address.address1='',
      //   this.userObj.address.address2='',
      // this.userObj.address.city='',
      // this.userObj.address.zipCode='',
      // this.userObj.address.state=''
      }
    })
  }
  updateProfile(){
    let address={
      address1:this.userObj.address.address1,
      address2:this.userObj.address.address2,
      city:this.userObj.address.city,
      zipCode:this.userObj.address.zipCode,
      state:this.userObj.address.state,
    }
    console.log(address);
    this.user.updateUserProfile(this.userObj.firstname,this.userObj.lastname,this.userObj.phone,this.userObj.email,address)
  }
  logout(){
    this.user.removeJwt();
  }
}
