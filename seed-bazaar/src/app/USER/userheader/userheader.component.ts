import { Component, OnInit, HostListener } from '@angular/core';
import { UserService } from '../service/user.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-userheader',
  templateUrl: './userheader.component.html',
  styleUrls: ['./userheader.component.css']
})
export class UserheaderComponent implements OnInit {
  categoryArr;
  maincategoryArr;
  categoryUrl;
  cartValue;
  finalCartArr;
  innerWidth;
  innerHeight;


  userObj;
  productArr;
  total = 0;
  discountCodeArr: any = [];
  updateObj;
  discountCodeValue;
  updateIndex;

  cart: any = [];

  id;
  check;
  photo = "";
  height = 675;
  // height = 361;
  windowWidth = 0;
  headerItemVisible=false;
  toggleSelecting: boolean = false;


  @HostListener('window:resize', ['$event']) // used to detect changes of window size
  onResize(event) {
    this.innerHeight = 195;
    this.innerWidth = window.innerWidth;
    console.log(this.innerWidth);


    this.setImage(); // used to set backgournd image
  }

  stylesObj: any = {
    'background-image': `url(${this.photo})`,
    // 'height': `${this.height}px`
  }





  constructor(private user: UserService, private router: Router, private route: ActivatedRoute) {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;

    this.categoryUrl = router.url;
    this.setImage();
  }

  ngOnInit() {
    this.getCategory();
    this.getUser();
    this.id = this.user.getJwt();
    this.windowWidth = window.innerWidth;
    console.log(this.windowWidth)

  }

  async getUserDetails() {

    this.user.getUserDetailsFORCART().subscribe(async res => {
      this.userObj = res;
      if (res)
        this.cart = this.userObj.cart;
      else
        this.cart = this.user.getLocalCart();
  
  
      console.log("cart From Header ", this.cart)
      this.user.getUserCartFORCART().subscribe(async res => {
  
        this.productArr = res;
        console.log(res);
  
        this.cart = this.cart.filter(el => {
          let index = this.productArr.findIndex(ele => {
            return (el.productId == ele._id) && (el.variantIndex < ele.listPrice.length);
          })
          console.log("index", index)
          return index != -1
        })
        console.log("t cart", this.cart)
  
  
        if (this.user.userCheck()) {
          this.user.updateCompleteCart(this.cart).subscribe((res: any) => {
          })
        }
        else
          this.user.setLocalCart(this.cart)
  
        this.productArr.forEach((el, i) => {
          this.cart[i].listPrice = el.listPrice[this.cart[i].variantIndex].variantprice;
          console.log(el.listPrice[this.cart[i].variantIndex].variantprice);
        });
        console.log(res)
        this.calculateTotal();
        const response: any = await this.user.getAllDiscountCode();
        if (response.success)
          this.discountCodeArr = response.data;
  
  
  
  
        // i think is automatic application of discount code but im not sure
        for (let element of this.cart) {
  
          // console.log(element.productId);
          if (element.discountId) {
  
            let tempIndex = this.discountCodeArr.findIndex(el => element.discountId == el._id)
            console.log(this.discountCodeArr)
            if ((tempIndex != -1)) {
              // alert("Discount Code name Valid" + this.discountCodeArr[tempIndex].productId + " "+ this.updateObj._id)
              if (((this.discountCodeArr[tempIndex].productId == element._id) || (this.discountCodeArr[tempIndex].productId == ""))) {
                if (this.discountCodeArr[tempIndex].type == 1) {
                  element.listPrice = element.listPrice - ((element.listPrice * parseInt(this.discountCodeArr[tempIndex].value, 10)) / 100);
                  element.discountId = this.discountCodeArr[tempIndex]._id;
                }
                else if (this.discountCodeArr[tempIndex].type == 2) {
                  element.listPrice = (element.listPrice) - parseInt(this.discountCodeArr[tempIndex].value, 10);
                  element.discountId = this.discountCodeArr[tempIndex]._id;
                }
                else if (this.discountCodeArr[tempIndex].type == 3) {
                  element.listPrice = parseInt(this.discountCodeArr[tempIndex].value, 10);
                  element.discountId = this.discountCodeArr[tempIndex]._id;
                }
                element.listPrice = ((Math.round(element.listPrice * 100)) / 100);
                if (element.listPrice < 0)
                  element.listPrice = 0
                console.log(element.listPrice)
  
               
                // if(this.cart[this.updateIndex].listPrice<this.productArr[this.updateIndex].minimumOrderPrice)
                // {
                //   this.cart[this.updateIndex].listPrice = this.productArr[this.updateIndex].minimumOrderPrice;
                //   alert("This Is the minimum Price :" + this.productArr[this.updateIndex].minimumOrderPrice + ", It cannot be discounted further ");
                // }
  
                this.calculateTotal();
              }
             
            }
          }
  
        };
  
        this.user.setLocalCart(this.cart);
      })
  
  
    })
  }
  calculateTotal() {
    throw new Error('Method not implemented.');
  }


  changeSelector() {
    this.toggleSelecting = !this.toggleSelecting
    console.log(this.toggleSelecting)
  }





  setImage() {
    console.log(this.router.url)

    if (this.innerWidth < 768) // mobile images
    {
      if (this.router.url == "/contactus") {
        this.photo = "../../../assets/newmobileheaderimages/contact-us-mobile.jpg";
        // this.height = 550;
        this.stylesObj = {
          'background-image': `url(${this.photo})`,
          'height': `${this.innerHeight}px`,
        }
      }


      // else if (this.router.url == "/") {
      //   console.log("running");
      //   this.photo = "../../../assets/mobileheaderimages/mobile-view-banner.jpg";
      //   this.height = 738;
      //   this.stylesObj = {
      //     'background-image': `url(${this.photo})`,
      //     'height': `${this.innerHeight}px`,

      //   }
      // }

      // else if (this.router.url == "") {
      //   console.log("running");
      //   this.photo = "../../../assets/mobileheaderimages/mobile-view-banner.jpg";
      //   this.height = 738;
      //   this.stylesObj = {
      //     'background-image': `url(${this.photo})`,
      //     'height': `${this.innerHeight}px`,

      //   }
      // }





      else if (this.router.url == "/about/ourPhilosophy") {
        console.log("running");
        this.photo = "../../../assets/newmobileheaderimages/our-philosphy--mobile.jpg";
        // this.height = 738;
        this.stylesObj = {
          'background-image': `url(${this.photo})`,
          'height': `${this.innerHeight}px`
        }
      }



      else if (this.router.url == "/about/ourJourney") {
        this.photo = "../../../assets/newmobileheaderimages/Wild-Organic-Web-Banner-our-jurney.jpg-mobile.jpg";
        // this.height = 738;
        this.stylesObj = {
          'background-image': `url(${this.photo})`,
          'height': `${this.innerHeight}px`
        }
      }
      // else if (this.router.url == "/about/ourPhilosophy") {
      //   this.photo = "../../../assets/mobileheaderimages/mobilejourney.jpg";
      //   this.height = 738;
      //   this.stylesObj = {
      //     'background-image': `url(${this.photo})`,
      //     'height': `${this.innerHeight}px`
      //   }
      // }
      else if (this.router.url == "/about/ourIngredients") {
        this.photo = "../../../assets/newmobileheaderimages/Ingredients-mobile.jpg";
        // this.height = 738;
        this.stylesObj = {
          'background-image': `url(${this.photo})`,
          'height': `${this.innerHeight}px`
        }
      }
      else if (this.router.url == "/user/manageAddress") {
        this.photo = "../../../assets/newmobileheaderimages/my-account-mobile.jpg";
        // this.height = 550;
        this.stylesObj = {
          'background-image': `url(${this.photo})`,
          'height': `${this.innerHeight}px`
        }
      }
      else if (this.router.url == "/user/myAccount") {
        this.photo = "../../../assets/newmobileheaderimages/my-account-mobile.jpg";
        // this.height = 550;
        this.stylesObj = {
          'background-image': `url(${this.photo})`,
          'height': `${this.innerHeight}px`
        }
      }
      else if (this.router.url == "/user/cart") {
        this.photo = "../../../assets/newmobileheaderimages/SHOPPING-CART-MOBILE.jpg";
        // this.height = 550;
        this.stylesObj = {
          'background-image': `url(${this.photo})`,
          'height': `${this.innerHeight}px`
        }
      }
      else if (this.router.url == "/user/checkout") {
        this.photo = "../../../assets/newmobileheaderimages/checkout-mobile.jpg";
        // this.height = 675;
        this.stylesObj = {
          'background-image': `url(${this.photo})`,
          'height': `${this.innerHeight}px`
        }
      }
      else if (this.router.url == "/user/login") {
        this.photo = "../../../assets/newmobileheaderimages/my-account-mobile.jpg";
        // this.height = 540;
        this.stylesObj = {
          'background-image': `url(${this.photo})`,
          'height': `${this.innerHeight}px`
        }
      }
      else if (this.router.url == "/user/orderHistory") {
        this.photo = "../../../assets/newmobileheaderimages/my-account-mobile.jpg";
        // this.height = 540;
        this.stylesObj = {
          'background-image': `url(${this.photo})`,
          'height': `${this.innerHeight}px`
        }
      }
      else if (this.router.url.includes("/user/orderDetails")) {
        this.photo = "../../../assets/newmobileheaderimages/my-account-mobile.jpg";
        // this.height = 540;
        this.stylesObj = {
          'background-image': `url(${this.photo})`,
          'height': `${this.innerHeight}px`
        }
      }
      else if (this.router.url.includes("/blog")) {
        this.photo = "../../../assets/newmobileheaderimages/BLOG-FOR-MOBILE.jpg";
        // this.height = 540;
        this.stylesObj = {
          'background-image': `url(${this.photo})`,
          'height': `${this.innerHeight}px`
        }
      }
      else if (this.router.url.includes("/product")) {
        this.photo = "../../../assets/newmobileheaderimages/OUR-PRODUCT-MOBILE.jpg";
        // this.height = 540;
        this.stylesObj = {
          'background-image': `url(${this.photo})`,
          'height': `${this.innerHeight}px`
        }
      }
      else if (this.router.url.includes("/category")) {
        this.photo = "../../../assets/newmobileheaderimages/OUR-PRODUCT-MOBILE.jpg";
        // this.height = 540;
        this.stylesObj = {
          'background-image': `url(${this.photo})`,
          'height': `${this.innerHeight}px`
        }
      }

    }
    else //desktop size images
    {

      // if (this.router.url == "/") {
      //   this.photo = "../../../assets/newmobileheaderimages/home-header.png";
      //   this.height = 550;
      //   this.stylesObj = {
      //     'background-image': `url(${this.photo})`,
      //     // 'height': `${this.height}px`
      //   }
      // }

      if (this.router.url == "/contactus") {
        this.photo = "../../../assets/newUserHeaderBannerImages/contact-us.jpg";
        // this.height = 550;
        this.stylesObj = {
          'background-image': `url(${this.photo})`,
          // // 'height': `${this.height}px`
        }
      }


      // else if (this.router.url == "") {
      //   this.photo = "../../../assets/newUserHeaderBannerImages/home-header.png";
      //   this.height = 675;
      //   this.stylesObj = {
      //     'background-image': `url(${this.photo})`,
      //     // 'height': `${this.height}px`
      //   }
      // }

      else if (this.router.url == "/about/ourPhilosophy") {
        this.photo = "../../../assets/newUserHeaderBannerImages/our-philosphy.jpg";
        // this.height = 738;
        this.stylesObj = {
          'background-image': `url(${this.photo})`,
          // // 'height': `${this.height}px`
        }
      }
      else if (this.router.url == "/about/ourJourney") {
        this.photo = "../../../assets/newUserHeaderBannerImages/Wild-Organic-Web-Banner-our-jurney.jpg";
        // this.height = 738;
        this.stylesObj = {
          'background-image': `url(${this.photo})`,
          // // 'height': `${this.height}px`
        }
      }
      else if (this.router.url == "/about/ourIngredients") {
        this.photo = "../../../assets/newUserHeaderBannerImages/Ingredients.jpg";
        this.height = 738;
        this.stylesObj = {
          'background-image': `url(${this.photo})`,
          // 'height': `${this.height}px`
        }
      }
      else if (this.router.url == "/user/manageAddress") {
        this.photo = "../../../assets/newUserHeaderBannerImages/Banner-15.jpg";
        this.height = 550;
        this.stylesObj = {
          'background-image': `url(${this.photo})`,
          // 'height': `${this.height}px`
        }
      }
      else if (this.router.url == "/user/myAccount") {
        this.photo = "../../../assets/newUserHeaderBannerImages/Banner-15.jpg";
        this.height = 550;
        this.stylesObj = {
          'background-image': `url(${this.photo})`,
          // 'height': `${this.height}px`
        }
      }
      else if (this.router.url == "/user/cart") {
        this.photo = "../../../assets/newUserHeaderBannerImages/SHOPPING-CART.jpg";
        this.height = 550;
        this.stylesObj = {
          'background-image': `url(${this.photo})`,
          // 'height': `${this.height}px`
        }
      }
      else if (this.router.url == "/user/checkout") {
        this.photo = "../../../assets/newUserHeaderBannerImages/checkout.jpg";
        this.height = 675;
        this.stylesObj = {
          'background-image': `url(${this.photo})`,
          // 'height': `${this.height}px`
        }
      }
      else if (this.router.url == "/user/login") {
        this.photo = "../../../assets/newUserHeaderBannerImages/Banner-15.jpg";
        this.height = 540;
        this.stylesObj = {
          'background-image': `url(${this.photo})`,
          // 'height': `${this.height}px`
        }
      }
      else if (this.router.url == "/user/orderHistory") {
        this.photo = "../../../assets/newUserHeaderBannerImages/Banner-15.jpg";
        this.height = 540;
        this.stylesObj = {
          'background-image': `url(${this.photo})`,
          // 'height': `${this.height}px`
        }
      }
      else if (this.router.url.includes("/user/orderDetails")) {
        this.photo = "../../../assets/newUserHeaderBannerImages/Banner-15.jpg";
        this.height = 540;
        this.stylesObj = {
          'background-image': `url(${this.photo})`,
          // 'height': `${this.height}px`
        }
      }
      else if (this.router.url.includes("/blog")) {
        this.photo = "../../../assets/newUserHeaderBannerImages/BLOG.jpg";
        this.height = 540;
        this.stylesObj = {
          'background-image': `url(${this.photo})`,
          // 'height': `${this.height}px`
        }
      }

      else if (this.router.url.includes("/product")) {
        this.photo = "../../../assets/newUserHeaderBannerImages/OUR-PRODUCR.jpg";
        this.height = 540;
        this.stylesObj = {
          'background-image': `url(${this.photo})`,
          // 'height': `${this.height}px`
        }
      }
      else if (this.router.url.includes("/category")) {
        this.photo = "../../../assets/newUserHeaderBannerImages/OUR-PRODUCR.jpg";
        this.height = 540;
        this.stylesObj = {
          'background-image': `url(${this.photo})`,
          // 'height': `${this.height}px`
        }
      }
    }

  }




  getCategory() {

    this.user.getCategory().subscribe(res => {
      this.categoryArr = res;
      this.maincategoryArr = res;
      this.categoryArr = this.maincategoryArr.filter(el => el.parentCategory == "");
    })

  }
  getUrl() {
    this.categoryUrl = this.route.snapshot.params['url'];

    // console.log(this.url);
    // this.getProductsByCategory();

  }
  logout() {
    this.user.removeJwt();
    this.id = this.user.getJwt();
  }
  getUser() {
    this.user.getUserCartFORCART().subscribe(res => {
      this.finalCartArr = res
      this.cartValue = this.finalCartArr.length;
    });

  }

  test(element) {

  }
  search(event) {

    const val = event.target.value;
    if (val)
      window.location.href = (`/search/${val}`);


  }


  
  toggleHeader(){
    this.headerItemVisible=!this.headerItemVisible;
}

}
