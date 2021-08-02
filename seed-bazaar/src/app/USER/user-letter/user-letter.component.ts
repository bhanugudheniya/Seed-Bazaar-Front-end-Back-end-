import { Component, OnInit } from '@angular/core';
import { NewsletterService } from 'src/app/services/newsletter.service';

@Component({
  selector: 'app-user-letter',
  templateUrl: './user-letter.component.html',
  styleUrls: ['./user-letter.component.css']
})
export class UserLetterComponent implements OnInit {
email;
  constructor(private news:NewsletterService) { }

  ngOnInit() {
  }
  async subscribeNews(){
    const res:any=await this.news.subscribeNewsletter(this.email);
    alert(res.message);
  }
}
