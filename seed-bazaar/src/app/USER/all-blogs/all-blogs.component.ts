import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin/service/admin.service';

@Component({
  selector: 'app-all-blogs',
  templateUrl: './all-blogs.component.html',
  styleUrls: ['./all-blogs.component.css']
})
export class AllBlogsComponent implements OnInit {

  constructor(private admin:AdminService) { }
  displayArr:any;
  url = this.admin.mainurl;

  ngOnInit() {
    this.getBlogs();
  }

  getBlogs()
  {
    this.admin.getBlog().subscribe((res:any)=>{
      this.displayArr = res
    })
  }

}
