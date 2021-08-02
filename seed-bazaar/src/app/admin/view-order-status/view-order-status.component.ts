import { Component, OnInit } from '@angular/core';
import { AdminService } from "../service/admin.service"
@Component({
  selector: 'app-view-order-status',
  templateUrl: './view-order-status.component.html',
  styleUrls: ['./view-order-status.component.css']
})
export class ViewOrderStatusComponent implements OnInit {
  dataArray;
  obj1;
  _id;
  

  constructor(private Admin:AdminService) { }

  ngOnInit() {
    this.getOrderStatus();
  }

  getOrderStatus(){
    this.Admin.getOrderStatus().subscribe(res=>{
     
      this.dataArray=res;
      // console.log("test",this.dataArray);
    });
  }

  deleteOrderStatus(id){
    this.Admin.deleteOrderStatus(id);

}}
