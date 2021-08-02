import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  email;
  constructor(private user:UserService) { }

  ngOnInit() {
  }
  async forgotPassword(){
    const res:any=await this.user.forgotPassword(this.email)
    alert(res.message);
  }
}
