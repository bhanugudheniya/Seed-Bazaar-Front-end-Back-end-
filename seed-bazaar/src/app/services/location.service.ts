import {Injectable} from '@angular/core';
import {UrlService} from './url.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class LocationService {

    constructor(private mainurl: UrlService, private http: HttpClient) {}
    url = `${this.mainurl.url}/location`

    getLocationsByCityId(id) {
        return this.http.get(`${this.url}/getLocationsByCityId/${id}`).toPromise();
    }

    getall() {
        return this.http.get(`${this.url}`).toPromise();
    }

    getById(id) {
        return this.http.get(`${this.url}/getById/${id}`).toPromise();
    }

    deleteById(id) {
        return this.http.delete(`${this.url}/deleteById/${id}`).toPromise();
    }

    add(obj) {
        return this.http.post(`${this.url}/`, obj).toPromise();
    }
}
