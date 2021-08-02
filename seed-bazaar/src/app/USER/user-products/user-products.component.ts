import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-products',
  templateUrl: './user-products.component.html',
  styleUrls: ['./user-products.component.css']
})
export class UserProductsComponent implements OnInit {
  url;
  productsArr;
  imgurl;
  categoryArr;
  filterPrice = 0;
  mainProductsArr;
  productObj;
  quantity = 1;
  parentUrl;
  mainCategoryArr;
  search;
  allMainCategoryArr;
  loading = true;
  categoryLoading = true


  constructor(private route: ActivatedRoute, private user: UserService, private router: Router) {
    router.events.subscribe((val) => {
      this.loading = true
      this.getUrl();
    })
  }
  addCart(val, id) {
    // console.log(val);
    let index = this.productsArr.findIndex(el => {
      return el._id == id
    });
    this.user.addCart(id, this.quantity, val, this.productsArr[index].variantVal)


    // console.log(this.productObj)
  }
  getUrl() {
    this.url = this.route.snapshot.params['url']
    this.parentUrl = this.route.snapshot.params['parentUrl']
    this.search = this.route.snapshot.params['search']
    // console.log(this.url);
    this.getCategory();

    if (this.search) {
      this.getSearchResults();
    }
    else
      this.getProductsByCategory();

  }
  async getSearchResults() {
    const res: any = await this.user.searchProducts(this.search)
    if (res.success) {


      this.productsArr = res.data;
      this.mainProductsArr = res.data;
      this.productsArr.forEach(el => {
        el.variantVal = 0;
      });
      this.loading = false
    }

  }
  getCategory() {

    this.user.getCategory().subscribe(res => {
      this.categoryArr = res;
      this.mainCategoryArr = res;
      if (this.url && !this.parentUrl)
        this.categoryArr = this.mainCategoryArr.filter(el => el.parentCategory == this.url);
      // else if (!this.url)
      // {
      //   this.categoryArr = this.mainCategoryArr.filter(el=>el.parentCategory=="");
      // }
      this.allMainCategoryArr = this.mainCategoryArr.filter(el => el.parentCategory == "");
      this.categoryLoading = false
    })
  }
  ngOnInit() {
    this.getUrl();
    this.imgurl = this.user.mainurl;
    console.log(this.imgurl)
  }
  getProductsByCategory() {
    if (this.url) {
      this.user.getProductsByCategory(this.url).subscribe((res: any) => {
        if (res.message) {
          console.log(res.message)
          this.loading = false
        }
        else {
          this.productsArr = res;
          this.mainProductsArr = res;
          this.productsArr.forEach(el => {
            el.variantVal = 0;
          });
          this.loading = false
        }
      })
    }
    else {
      this.user.getAllProducts().subscribe((res: any) => {
        if (res.message) {
          console.log(res.message)
          this.loading = false
        }
        else {

          this.productsArr = res;
          this.mainProductsArr = res;
          this.productsArr.forEach(el => {
            el.variantVal = 0;
          });
          this.loading = false
        }
        console.log(res)
      })
    }
  }
  setVariantVal(variantIndex, productIndex) {
    this.productsArr[productIndex].variantVal = parseInt(variantIndex, 10);
  }
  filterArr(filterPrice) {
    console.log(filterPrice);
    this.productsArr = this.mainProductsArr.filter(el => {
      console.log(el.listPrice.findIndex(el => el.variantprice >= filterPrice) != -1)
      return (el.listPrice.findIndex(el => el.variantprice >= filterPrice) != -1)

    });
  }




}
