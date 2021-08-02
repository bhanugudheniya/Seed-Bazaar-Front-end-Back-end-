import { Component, OnInit } from '@angular/core';
import { HomepageBannerService } from 'src/app/services/homepage-banner.service';

@Component({
  selector: 'app-homepage-banner-image',
  templateUrl: './homepage-banner-image.component.html',
  styleUrls: ['./homepage-banner-image.component.css']
})
export class HomepageBannerImageComponent implements OnInit {
  file: File | null;

  bannerArr:any;
  constructor(private banner:HomepageBannerService) { }

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
    this.getBanner();
    alert(res.message)
  }

}
