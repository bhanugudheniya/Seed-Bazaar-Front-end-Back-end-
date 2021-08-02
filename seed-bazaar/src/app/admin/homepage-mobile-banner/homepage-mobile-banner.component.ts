import { Component, OnInit } from '@angular/core';
import { HomepageMobileBannerService } from 'src/app/services/homepage-mobile-banner/homepage-mobile-banner.service';

@Component({
  selector: 'app-homepage-mobile-banner',
  templateUrl: './homepage-mobile-banner.component.html',
  styleUrls: ['./homepage-mobile-banner.component.css']
})
export class HomepageMobileBannerComponent implements OnInit {

  file: File | null;

  bannerArr:any;
  constructor(private banner:HomepageMobileBannerService) { }

  ngOnInit() {
    this.getBanner()
  }


  async getBanner(){
    const res:any=await this.banner.getBanners();
    this.bannerArr=res.data
    this.bannerArr.forEach(element => {
      element.imageUrl= `${this.banner.mainurl}/uploads/`+element.image
    });
  }

  onFileChange(event)
  {
    this.file = event.target.files[0]
    console.log(this.file);
  }

 async handleSubmit(){
   let form_data=new FormData();
   form_data.append('file',this.file,this.file.name)
    const res:any=await this.banner.newBanner(form_data);
    alert(res.message)
    this.ngOnInit();
  }
  async setActive(id){
    const res:any=await this.banner.bannerSetActive(id)
    alert(res.message)
  }
  async setInactive(id){
    const res:any=await this.banner.bannerSetInactive(id)
    alert(res.message)
  }
  async removeBanner(id,filename){
    const res:any=await this.banner.removeBanner(id,filename)
    alert(res.message)
    this.getBanner();
  }


}
