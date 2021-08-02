import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  url:any;
  blogObj:any;
  mainurl;

  constructor(private route:ActivatedRoute,private user:UserService, private router:Router) { 
  
  }

  ngOnInit() {
    this.getUrl();
  }

  getUrl()
  {
    this.mainurl = this.user.mainurl;
    this.url=this.route.snapshot.params['url']
    // console.log(this.url);
    this.user.getBlogByUrl(this.url).subscribe((res:any)=>{
      this.blogObj = res.data;
      console.log( this.blogObj)
      console.log( this.blogObj.blog)
    })
  }
}
