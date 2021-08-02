import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class NewsletterService {
  // mainurl="http://3.134.89.88:3000"
  //  mainurl = "https://api.shopitemonline.com";// this is live

  mainurl = "https://api.nsuperfood.com"
  // mainurl = "https://api.shopitemonline.com";
  //  mainurl = "http://localhost:3000"
  // mainurl = "http://192.168.1.110:3000"
  url = `${this.mainurl}/news`;
  constructor(private http: HttpClient, private router: Router) { }

  subscribeNewsletter(email) {
    let obj = { email }
    return this.http.post(`${this.mainurl}/news/newsletterSubscrbe`, obj).toPromise()
  }
  getNewsletter() {
    return this.http.get(`${this.mainurl}/news/getNewsletter`).toPromise()
  }
  deleteNewsletter(id) {
    let obj = { id }
    return this.http.post(`${this.mainurl}/news/deleteNewsletter`, obj).toPromise()
  }

}
