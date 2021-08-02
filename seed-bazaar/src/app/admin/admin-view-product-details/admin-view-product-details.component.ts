import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AdminService} from '../service/admin.service';
@Component({
  selector: 'app-admin-view-product-details',
  templateUrl: './admin-view-product-details.component.html',
  styleUrls: ['./admin-view-product-details.component.css']
})
export class AdminViewProductDetailsComponent implements OnInit {
url;
productDetails;
reviewArr;
  constructor(private route:ActivatedRoute,private admin:AdminService) { 
    this.url=this.route.snapshot.params['name'];
    console.log(this.url);
  }

  ngOnInit() {
    this.getProductDetails();
  }
  getProductDetails(){
    this.admin.getProductDetails(this.url).subscribe(res=>{this.productDetails=res;
      // console.log(this.productDetails);
      this.getSpecificProductReview();
    });
  }
  getSpecificProductReview(){
    this.admin.getSpecificProductReview(this.productDetails._id).subscribe(res=>this.reviewArr=res)
  }
  setActive(reviewId){
    this.admin.setReviewActive(reviewId)
  }
  deleteReview(reviewId){
    this.admin.deleteReview(reviewId)
  }
}
