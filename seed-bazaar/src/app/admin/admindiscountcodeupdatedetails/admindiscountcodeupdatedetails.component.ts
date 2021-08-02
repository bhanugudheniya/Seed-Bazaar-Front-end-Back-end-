import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';
@Component({
  selector: 'app-admindiscountcodeupdatedetails',
  templateUrl: './admindiscountcodeupdatedetails.component.html',
  styleUrls: ['./admindiscountcodeupdatedetails.component.css']
})
export class AdmindiscountcodeupdatedetailsComponent implements OnInit {
  name;
  code;
  value;
  type;
  productName;
  productArr;
  validFrom;
  validTill;
  discountadd;

  constructor( private admin:AdminService,) { }

  ngOnInit( ) {
  }
  update_discount(id)
  {
    
  }

}
