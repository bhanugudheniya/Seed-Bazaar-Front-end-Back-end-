import { Component, OnInit } from '@angular/core';
import { NewsletterService } from 'src/app/services/newsletter.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {
  newsArr:any=[]
  constructor(private news:NewsletterService) { }

  ngOnInit() {
    this.getNewsletter()
  }
  async getNewsletter(){
    const res:any=await this.news.getNewsletter();
    this.newsArr = res.data
  }
  async deleteById(id){
     const res:any=await this.news.deleteNewsletter(id);
     alert(res.message)
     this.getNewsletter();
  }
}
