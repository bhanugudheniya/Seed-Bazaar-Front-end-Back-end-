import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms'
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-contact-us',
  templateUrl: './user-contact-us.component.html',
  styleUrls: ['./user-contact-us.component.css']
})
export class UserContactUsComponent implements OnInit {

  contactUs:FormGroup;
  businessContactUs:FormGroup;

  constructor(private fb:FormBuilder, private user:UserService) { }

  ngOnInit() {
    this.contactUs = this.fb.group({
      name:[''],
      phone:[''],
      email:[''],
      message:[''],
      subject:[''],
    })
    this.businessContactUs = this.fb.group({
      firstName:[''],
      lastName:[''],
      phone:[''],
      email:[''],
      message:[''],
      subject:[''],
      businessName:[''],
      businessType:[''],
    })
  }

  addContactUs()
  {
    let obj = JSON.stringify(this.contactUs.value);
    obj = JSON.parse(obj)
    this.user.addContactUs(obj).subscribe((res:any)=>{
      alert(res.message);
    })
  }

  addBusinessContactUs()
  {
    let obj = JSON.stringify(this.businessContactUs.value);
    obj = JSON.parse(obj)
    this.user.addbusinessContactUs(obj).subscribe((res:any)=>{
      alert(res.message);
    })
  }
}
