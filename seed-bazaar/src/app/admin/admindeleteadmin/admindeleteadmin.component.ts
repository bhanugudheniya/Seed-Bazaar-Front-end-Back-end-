import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-admindeleteadmin',
  templateUrl: './admindeleteadmin.component.html',
  styleUrls: ['./admindeleteadmin.component.css']
})
export class AdmindeleteadminComponent implements OnInit {

  adminArr;

  constructor(private admin:AdminService) { }

  ngOnInit() {
    this.getAdmins();
  }

  getAdmins()
  {
    this.admin.getAdmins().subscribe(res=>{
      this.adminArr = res;
      console.log(this.adminArr);
    })
  }

  deleteAdmin(_id)
  {
    this.admin.deleteAdmin(_id);
  }

}
