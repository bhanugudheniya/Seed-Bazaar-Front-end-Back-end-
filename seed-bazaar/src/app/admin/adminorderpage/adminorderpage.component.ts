import {Component, OnInit} from '@angular/core';
import {AdminService} from '../service/admin.service';

@Component({
    selector: 'app-adminorderpage',
    templateUrl: './adminorderpage.component.html',
    styleUrls: ['./adminorderpage.component.css']
})
export class AdminorderpageComponent implements OnInit {
    ordersArr: any = [];
    productsArr: any = [];
    orderStatus: any = [];


    orderStatusName;
    updateProductObj;
    constructor(private admin: AdminService) {}

    ngOnInit() {
        this.getOrders();
        this.getOrderStatus();
    }
    getOrders() {
        this.admin.getOrders().subscribe(res => this.ordersArr = res)
    }

    setProductObj(obj) {
        this.updateProductObj = obj;
        console.log(this.updateProductObj);
    }
    getOrderStatus() {
        this.admin.getOrderStatus().subscribe(res => {this.orderStatus = res});
    }
    updateOrderStatus() {
        this.admin.updateOrderStatus(this.orderStatusName, this.updateProductObj._id);
    }
    async markOrderAsCompleted(id) {
        const res: any = await this.admin.markOrderAsCompleted(id);
        alert(res.message);
        this.ngOnInit()
    }
}
