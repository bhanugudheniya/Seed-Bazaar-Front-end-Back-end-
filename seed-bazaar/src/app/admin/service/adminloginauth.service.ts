import { Injectable } from '@angular/core';
import { Router,CanActivate } from '@angular/router';
import { AdminService } from './admin.service';

@Injectable({
  providedIn: 'root'
})
export class AdminloginauthService {

  constructor(private auth:AdminService, private router:Router) { }
  canActivate(){
    return  this.auth.getJwt()? true : this.router.parseUrl('/admin/login');
  }
}
