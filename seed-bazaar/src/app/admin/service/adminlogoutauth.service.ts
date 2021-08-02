import { Injectable } from '@angular/core';
import { Router,CanActivate } from '@angular/router';
import { AdminService } from './admin.service';

@Injectable({
  providedIn: 'root'
})
export class AdminlogoutauthService {

  constructor(private auth:AdminService, private router:Router) { }
  canActivate(){
    return this.auth.getJwt()? this.router.parseUrl('/admin/category/view') : true;
  }
}
