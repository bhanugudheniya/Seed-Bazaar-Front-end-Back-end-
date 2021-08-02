import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { AdminService } from 'src/app/admin/service/admin.service';

@Component({
  selector: 'app-user-homepage',
  templateUrl: './user-homepage.component.html',
  styleUrls: ['./user-homepage.component.css']
})
export class UserHomepageComponent implements OnInit {
  productsArr;
  imgurl; mainproductsArr;
  blogArr: any;
  loading = true;
  blogLoading = true;
  constructor(private user: UserService, private admin: AdminService) { }

  ngOnInit() {
    this.getProducts();
    this.imgurl = this.user.mainurl;
    this.getBlogs();

  }
  getProducts() {
    this.user.getAllProducts().subscribe((res: any) => {
      if (res.message)
        alert(res.message)
      else {
        this.mainproductsArr = res;
        this.productsArr = this.mainproductsArr.filter(el => el.featured == true);
        this.loading = false;
        console.log(this.productsArr, "sdfgh")
      }
      console.log(res)
    })
  }
  getBlogs() {
    this.admin.getBlog().subscribe(res => {
      this.blogArr = res;
      this.blogArr = this.blogArr.slice(0, 3);
      this.blogLoading = false;
    })
  }

}
