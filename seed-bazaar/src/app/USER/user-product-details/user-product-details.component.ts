import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-product-details',
  templateUrl: './user-product-details.component.html',
  styleUrls: ['./user-product-details.component.css']
})
export class UserProductDetailsComponent implements OnInit {
  url;
  productObj;
  quantity = 1;
  displayImage;
  index = 0;
  variantIndex = 0;
  testImg = '../../../assets/mwe-550-3-500x500.jpg';

  rating = 0;
  review;
  reviewArr;
  imgMainUrl: any;
  constructor(private route: ActivatedRoute, private user: UserService, private router: Router) {
    this.url = route.snapshot.params['url']
    router.events.subscribe(el => {
      this.url = route.snapshot.params['url']
      this.ngOnInit()
    })
  }

  ngOnInit() {
    this.getSpecificProduct();
    this.imgMainUrl = this.user.mainurl;
  }


  createLink() {
    return '../../../assets/Images/550x550_image_size.jpg'
  }

  setRating(val) {
    this.rating = val
  }
  getSpecificProduct() {
    this.user.getSpecificProduct(this.url).subscribe(res => {
      this.productObj = res;
      this.productObj.variantVal = 0;
      this.displayImage = this.productObj.sliderFilePath[0];
      this.getReview();
    })
  }
  addCart(val) {
    // console.log(val);
    this.user.addCart(this.productObj._id, this.quantity, val, this.variantIndex)
    // console.log(this.productObj)
  }
  createImageLink(imgurl) {
    return (`${this.imgMainUrl}/uploads/${imgurl}`)
    // return this.testImg;
  }
  nextImg() {
    this.index++;
    if (this.index < this.productObj.sliderFilePath.length) {
      this.displayImage = this.productObj.sliderFilePath[this.index]
    }
    else {
      this.index = 0;
      this.displayImage = this.productObj.sliderFilePath[this.index]
    }
  }
  prevImg() {
    if (this.index != 0) {
      this.index--;
      this.displayImage = this.productObj.sliderFilePath[this.index]
    }
    else {
      this.index = this.productObj.sliderFilePath.length - 1;
      this.displayImage = this.productObj.sliderFilePath[this.index]
    }
  }
  setImg(i) {
    this.index = i;
    this.displayImage = this.productObj.sliderFilePath[this.index]
  }
  addReview() {
    this.user.addProductReview(this.review, this.rating, this.productObj._id)
  }
  getReview() {
    this.user.getSpecificProductReview(this.productObj._id).subscribe(res => {
      this.reviewArr = res;
    });

  }
  consoles() {
    console.log("test")
    // console.log(this.productObj.additionalDetails);
  }

  setVariantVal(variantIndex) {
    this.variantIndex = variantIndex;
    this.productObj.variantVal = parseInt(variantIndex, 10);
    // console.log(this.productObj);

  }




}
