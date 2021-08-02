import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-set-forgot-password',
  templateUrl: './set-forgot-password.component.html',
  styleUrls: ['./set-forgot-password.component.css']
})
export class SetForgotPasswordComponent implements OnInit {
  forgotToken;
  password;
  constructor(private route:ActivatedRoute,private user:UserService,private router:Router) {
    this.forgotToken=route.snapshot.params['id']
   }

  ngOnInit() {
  }
  async forgotPassword(){
    const res:any= await this.user.serForgotPassword(this.password,this.forgotToken);
    alert(res.message);
    this.router.navigateByUrl('');

  }
}
