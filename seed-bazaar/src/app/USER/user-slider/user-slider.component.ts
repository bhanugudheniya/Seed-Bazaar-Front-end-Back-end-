import { UrlService } from './../../services/url.service';
import { Component, OnInit } from '@angular/core';
import { HomepageBannerService } from 'src/app/services/homepage-banner.service';
import { HomepageMobileBannerService } from 'src/app/services/homepage-mobile-banner/homepage-mobile-banner.service';

@Component({
    selector: 'app-user-slider',
    templateUrl: './user-slider.component.html',
    styleUrls: ['./user-slider.component.css']
})

export class UserSliderComponent implements OnInit {

    bannerArr: any;

    i = 0;
    val;
    deviceWidth;
    constructor(private banner: HomepageBannerService, private mobileBanner: HomepageMobileBannerService , private URL: UrlService) { }

    ngOnInit() {
        this.setTimeInterval();
        this.getBanner();
        
    }




    setImageURl(val){
        return `${this.URL.url}/uploads/${val}`;
    }



    setTimeInterval() {


        setInterval(() => this.slideImage(), 3000)
    }
        async getBanner() {
            this.deviceWidth = window.innerWidth;
            if (this.deviceWidth > 600) {
                const res: any = await this.banner.getActiveBanners();
                this.bannerArr = res.data;
                console.log(this.bannerArr,"banners");
                this.bannerArr.forEach(element => {
                    element.image = `${element.image}`
                });
            }
            else {
                const res: any = await this.mobileBanner.getActiveBanners();
                this.bannerArr = res.data;

                this.bannerArr.forEach(element => {
                    element.image = `${element.image}`
                });
            }
        }

        slideImage() {
            this.i = this.i + 1;

            const totalElements = document.getElementById("imagePos").childNodes.length - 1;
            // console.log(totalElements)
            if ((this.i < (totalElements)) && (this.i >= 0)) {
                const widthVal = -(this.i * 100);
                // console.log(widthVal);
                document.getElementById('imagePos').style.transform = `translateX(${widthVal}vw)`;
                document.getElementById('imagePos').style.transition = "all ease-in-out 1s";
            }
            else {
                this.i = -1;
                this.slideToPos(0)
            }
        }

        slideToPos(val) {
            this.i = val;
            // console.log(this.i)
            const widthVal = -(this.i * 101);
            // console.log(widthVal);
            document.getElementById('imagePos').style.transform = `translateX(${widthVal}vw)`;
            document.getElementById('imagePos').style.transition = "all ease-in-out 1s";
        }


    }
