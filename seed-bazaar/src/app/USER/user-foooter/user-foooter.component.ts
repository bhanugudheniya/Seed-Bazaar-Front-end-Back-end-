import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-foooter',
  templateUrl: './user-foooter.component.html',
  styleUrls: ['./user-foooter.component.css']
})
export class UserFoooterComponent implements OnInit {
  productArr=[];
  url=""

  constructor(private user:UserService) { }

  ngOnInit() {
    // this.getAllProducts();
    // this.url = this.user.mainurl;
  }

  // async getAllProducts()
  // {
  //   const res:any =await  this.user.getAllProducts().toPromise()
  //   console.log(res)
  //   this.productArr = res.reverse();
  //   console.log(this.productArr)
  //   console.log(this.productArr[1].sliderFilePath[0])
  // }

}
