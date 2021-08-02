import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-adminsidebar',
  templateUrl: './adminsidebar.component.html',
  styleUrls: ['./adminsidebar.component.css']
})
export class AdminsidebarComponent implements OnInit {

  constructor(private admin:AdminService) { }
sidebarToggle=0
  ngOnInit() {
  }

  logout()
  {
    this.admin.logout();
  }

  setSidebarToggle(num)
  {
    this.sidebarToggle=num

  }
  openTab(){
    window.open('https://analytics.google.com/analytics/web/?authuser=2#/report-home/a168884474w235385968p220490575')
  }

}
