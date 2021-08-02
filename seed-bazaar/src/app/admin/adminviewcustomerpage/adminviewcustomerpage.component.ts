import { Component, OnInit } from '@angular/core';
import {AdminService} from '../service/admin.service'
@Component({
  selector: 'app-adminviewcustomerpage',
  templateUrl: './adminviewcustomerpage.component.html',
  styleUrls: ['./adminviewcustomerpage.component.css']
})
export class AdminviewcustomerpageComponent implements OnInit {
customerArr;
search;
order:String='name';
  reverse: boolean = false;
customerUpdateObj:any={};

password;

//////////////////////input fields
firstname;
lastname;
email;
phone;

  constructor(private admin:AdminService) { }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers(){
    this.admin.getCustomers().subscribe(res=>this.customerArr=res)
  }
  setUpdate(obj){
    this.customerUpdateObj=obj
  }
  updateCustomer(id){
    this.admin.updateCustomer(this.customerUpdateObj.firstname,this.customerUpdateObj.lastname,this.customerUpdateObj.email,this.customerUpdateObj.phone,id)
  }
  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }
    this.order = value;
  }
  deleteAccount(id){
    this.admin.deleteCustomerAccount(id);
  }
  resetPassword(password){
    this.admin.resetCustomerPassword(this.customerUpdateObj,password)
  }
}
