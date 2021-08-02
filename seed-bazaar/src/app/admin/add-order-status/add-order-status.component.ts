import { Component, OnInit } from '@angular/core';
import { AdminService } from "../service/admin.service"

@Component({
  selector: 'app-add-order-status',
  templateUrl: './add-order-status.component.html',
  styleUrls: ['./add-order-status.component.css']
})
export class AddOrderStatusComponent implements OnInit {
  Order;
  constructor(private Admin:AdminService) { }

  ngOnInit() {
  }

  AddOrderStatus() {
    this.Admin.AddOrderStatus(this.Order);
}
}
