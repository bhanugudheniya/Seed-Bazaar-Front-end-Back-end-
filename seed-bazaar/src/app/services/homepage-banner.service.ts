import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {UrlService} from './url.service';
@Injectable({
    providedIn: 'root'
})
export class HomepageBannerService {
    // mainurl="http://3.134.89.88:3000"
    // mainurl = "https://api.shopitemonline.com";// this is live

    // mainurl = "https://api.shopitemonline.com";
    //  mainurl = "http://localhost:3000"
    // mainurl = "http://192.168.1.110:3000"
    url = `${this.mainurl.url}/banner`;
    constructor(private http: HttpClient, private router: Router, public mainurl: UrlService) {}



    newBanner(formData) {
        return this.http.post(`${this.url}`, formData).toPromise()
    }


    getBanners() {
        return this.http.get(`${this.url}`).toPromise();
    }
    getActiveBanners() {
        return this.http.get(`${this.url}/getActiveBanner`).toPromise()
    }
    bannerSetActive(id) {
        let obj = {}
        return this.http.patch(`${this.url}/setBannerActive/${id}`, obj).toPromise()
    }
    bannerSetInactive(id) {
        let obj = {}
        return this.http.patch(`${this.url}/setBannerInactive/${id}`, obj).toPromise()
    }
    removeBanner(id, filename) {
        // let obj={id,filename}
        return this.http.delete(`${this.url}/removeBanner/${id}/${filename}`).toPromise()
    }

}
