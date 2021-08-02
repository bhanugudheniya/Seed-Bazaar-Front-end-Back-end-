import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-admincategoryactive',
  templateUrl: './admincategoryactive.component.html',
  styleUrls: ['./admincategoryactive.component.css']
})
export class AdmincategoryactiveComponent implements OnInit {
  search;
  order:String='name';
  reverse: boolean = false;

  categoryArr
  delete:any={};
  update:any={};
  constructor(private admin:AdminService) { }

  ngOnInit() {
    this.getCategory();
  }


  getCategory()
  {
    this.admin.getCategory().subscribe(res=>{
      this.categoryArr=res;
      console.log(this.categoryArr);
      console.log(this.categoryArr[0]);
    })
  }

toggleActive(id,active)
{
  this.admin.toggleCategoryActive(id,active).subscribe((res: any) => {
    this.getCategory();
      alert(res.message);
    })
;
}

setOrder(value: string) {
  if (this.order === value) {
    this.reverse = !this.reverse;
  }

  this.order = value;
}


}
