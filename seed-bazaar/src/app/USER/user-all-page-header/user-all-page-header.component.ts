import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-all-page-header',
  templateUrl: './user-all-page-header.component.html',
  styleUrls: ['./user-all-page-header.component.css']
})
export class UserAllPageHeaderComponent implements OnInit {
  headerItemVisible=false;
  windowWidth=0;
  constructor() { }

  ngOnInit(): void {
    this.windowWidth = window.innerWidth;
    console.log(this.windowWidth)
  }
  toggleHeader(){
    this.headerItemVisible=!this.headerItemVisible;
}

}
