import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../service/admin.service';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-admindiscountcodeviewdetails',
  templateUrl: './admindiscountcodeviewdetails.component.html',
  styleUrls: ['./admindiscountcodeviewdetails.component.css']
})
export class AdmindiscountcodeviewdetailsComponent implements OnInit {
  id;
  discountSpecific;
  typeFinalVaLue;
  constructor( private route:ActivatedRoute, private admin:AdminService) {
    this.id=route.snapshot.params['id']
   }

  ngOnInit() {
    this.getdiscountspecificdetails()
  }
  getdiscountspecificdetails(){
    this.admin.getdiscountspecific(this.id).subscribe((res:any)=>{
      this.discountSpecific= res
      console.log(this.discountSpecific);
      // this.typeval()
    })
  }

  // typeval(){
  //   if(this.discountSpecific.type==1){
  //     this.typeFinalVaLue="Percentage Off"
  //   }
  //   else if(this.discountSpecific.type==2){
  //     this.typeFinalVaLue="Amount Off"
  //   }
  //   else if(this.discountSpecific.type==3){
  //     this.typeFinalVaLue="Set Price"
  //   }
  //   return this.typeFinalVaLue
  // }
}
