import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { FormBuilder , FormGroup } from '@angular/forms'

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
  editToggle=true;
  userObj:any={};
  amount;
  changePasswordForm:FormGroup;
    constructor(private user:UserService, private fb:FormBuilder) { }
  
    ngOnInit() {
      this.getUser();
      this.changePasswordForm = this.fb.group({
        password:'',
        changePassword:''
      })
    }
    getUser(){
      this.user.getUserDetails().subscribe(res=>{
        this.userObj=res;
        if(!this.userObj.gender)
        {
          this.userObj.gender = 0
        }
      })
    }
    logout(){
      this.user.removeJwt();
    }

    toggleEditToggle()
    {
      this.editToggle = ! this.editToggle;
    }

    updateProfile()
    {
      this.user.updateCompleteUser(this.userObj);
    }

    async recharge(){
      const res:any=await this.user.rechargeWallet(this.amount);
      if(res){
        window.location.href=res.redirectUrl
      }

    }
}
