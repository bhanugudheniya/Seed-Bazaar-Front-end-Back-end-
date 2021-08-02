import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmincreatecategoryComponent } from './admin/admincreatecategory/admincreatecategory.component';
import { AdminmailtemplateComponent } from './admin/adminmailtemplate/adminmailtemplate.component';
import { AdminviewmailtemplateComponent } from './admin/adminviewmailtemplate/adminviewmailtemplate.component';
import { AdminviewcategorydetailsComponent } from './admin/adminviewcategorydetails/adminviewcategorydetails.component';
import { AdminregisterComponent } from './admin/adminregister/adminregister.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdminloginauthService } from './admin/service/adminloginauth.service';
import { AdminlogoutauthService } from './admin/service/adminlogoutauth.service';
import { AdminviewpageComponent } from './admin/adminviewpage/adminviewpage.component';
import { AdmindeleteadminComponent } from './admin/admindeleteadmin/admindeleteadmin.component';
import { AdmincategoryactiveComponent } from './admin/admincategoryactive/admincategoryactive.component';
import { AdmincategorychangeseoComponent } from './admin/admincategorychangeseo/admincategorychangeseo.component';
import { AdmincategorymetataginputComponent } from './admin/admincategorymetataginput/admincategorymetataginput.component';
import { AdminProductPageComponent } from './admin/admin-product-page/admin-product-page.component';
import { AdminViewAllProductsComponent } from './admin/admin-view-all-products/admin-view-all-products.component';
import { AdminViewProductDetailsComponent } from './admin/admin-view-product-details/admin-view-product-details.component';
import { AdmincreateblogComponent } from './admin/admincreateblog/admincreateblog.component';
import { AdminBlogPageWithButtonsComponent } from './admin/admin-blog-page-with-buttons/admin-blog-page-with-buttons.component';
import { AdminViewAllProductsActiveComponent } from './admin/admin-view-all-products-active/admin-view-all-products-active.component';
import { AdminViewAllProductsSeoComponent } from './admin/admin-view-all-products-seo/admin-view-all-products-seo.component';
import { AdminProductPageSeoComponent } from './admin/admin-product-page-seo/admin-product-page-seo.component';
import { AdminContentPageAddComponent } from './admin/admin-content-page-add/admin-content-page-add.component';
import { AdminViewAllContentPageComponent } from './admin/admin-view-all-content-page/admin-view-all-content-page.component';
import { AdminContentPageWithOptionComponent } from './admin/admin-content-page-with-option/admin-content-page-with-option.component';
import { AdminContentPageWithSeoComponent } from './admin/admin-content-page-with-seo/admin-content-page-with-seo.component';
import { ContentSpecificViewSeoComponent } from './admin/content-specific-view-seo/content-specific-view-seo.component';
import { AdminviewcustomerpageComponent } from './admin/adminviewcustomerpage/adminviewcustomerpage.component';
import { AdmincontentspecificviewdetailsComponent } from './admin/admincontentspecificviewdetails/admincontentspecificviewdetails.component';
import { AdmincontentpageupdateComponent } from './admin/admincontentpageupdate/admincontentpageupdate.component';
import { DiscountcodecreateComponent } from './admin/discountcodecreate/discountcodecreate.component';
import { AdmindiscountcodeViewAllComponent } from './admin/admindiscountcode-view-all/admindiscountcode-view-all.component';
import { AdmindiscountcodeupdatedetailsComponent } from './admin/admindiscountcodeupdatedetails/admindiscountcodeupdatedetails.component';
import { AdmindiscountcodeviewdetailsComponent } from './admin/admindiscountcodeviewdetails/admindiscountcodeviewdetails.component';
import { UserProductsComponent } from './USER/user-products/user-products.component';
import { UserHomepageComponent } from './USER/user-homepage/user-homepage.component';
import { UserContactUsComponent } from './USER/user-contact-us/user-contact-us.component';
import { UserloginComponent } from './USER/userlogin/userlogin.component';
import { UserregisterComponent } from './USER/userregister/userregister.component';
import { UserProductDetailsComponent } from './USER/user-product-details/user-product-details.component';
import { Notfound404Component } from './index/notfound404/notfound404.component';
import { AdminContentWithSeoPageOptionAndMoreComponent } from './admin/admin-content-with-seo-page-option-and-more/admin-content-with-seo-page-option-and-more.component';
import { UserCheckoutComponent } from './USER/user-checkout/user-checkout.component';
import { UserCartComponent } from './USER/user-cart/user-cart.component';
import { UserOurPhilosophyComponent } from './USER/user-our-philosophy/user-our-philosophy.component';
import { UserOurJourneyComponent } from './USER/user-our-journey/user-our-journey.component';
import { UserOurIngredientsComponent } from './USER/user-our-ingredients/user-our-ingredients.component';
import { AdminorderpageComponent } from './admin/adminorderpage/adminorderpage.component';
import { ViewOrderStatusComponent } from './admin/view-order-status/view-order-status.component';
import { AddOrderStatusComponent } from './admin/add-order-status/add-order-status.component';
import { AdminViewOrderProductsComponent } from './admin/admin-view-order-products/admin-view-order-products.component';
import { MyAccountComponent } from './USER/my-account/my-account.component';
import { MyAccountAddressComponent } from './USER/my-account-address/my-account-address.component';
import { UserorderDetailsComponent } from './USER/userorder-details/userorder-details.component';
import { UserorderHistoryComponent } from './USER/userorder-history/userorder-history.component';
import { AdminAdminDashboardComponent } from './admin/admin-admin-dashboard/admin-admin-dashboard.component';
import { AdminstockmanageComponent } from './admin/adminstockmanage/adminstockmanage.component';
import { AllBlogsComponent } from './USER/all-blogs/all-blogs.component';
import { BlogDetailComponent } from './USER/blog-detail/blog-detail.component';
import { AdminviewcontactComponent } from './admin/adminviewcontact/adminviewcontact.component';
import { AdminviewbusinesscontactComponent } from './admin/adminviewbusinesscontact/adminviewbusinesscontact.component';
import { NewsletterComponent } from './admin/newsletter/newsletter.component';
import { ForgotPasswordComponent } from './USER/forgot-password/forgot-password.component';
import { SetForgotPasswordComponent } from './USER/set-forgot-password/set-forgot-password.component';
import { ReturnComponent } from './USER/return/return.component';
import { TermsandconditionsComponent } from './USER/termsandconditions/termsandconditions.component';
import { HomepageBannerImageComponent } from './admin/homepage-banner-image/homepage-banner-image.component';
import { HomepageMobileBannerComponent } from './admin/homepage-mobile-banner/homepage-mobile-banner.component';
import { StateCrudComponent } from './admin/state-crud/state-crud.component';
import { CityCrudComponent } from './admin/city-crud/city-crud.component';
import { LocationCrudComponent } from './admin/location-crud/location-crud.component';
import { PlainheaderComponent } from './USER/plainheader/plainheader.component';



const routes: Routes = [
    // { path: '',redirectTo: '/admin/login',pathMatch: 'full'},

    { path: 'eFnUID81z2hGeDm0gkIED1zdSOEAoxXy', component: AdminregisterComponent, canActivate: [AdminlogoutauthService] },
    { path: 'admin/login', component: AdminloginComponent, canActivate: [AdminlogoutauthService] },
    { path: 'admin/view', component: AdmindeleteadminComponent, canActivate: [AdminloginauthService] },

    { path: 'admin/dashboard', component: AdminAdminDashboardComponent, canActivate: [AdminloginauthService] },
    { path: 'admin/category/add', component: AdmincreatecategoryComponent, canActivate: [AdminloginauthService] },
    { path: 'admin/category/view', component: AdminviewcategorydetailsComponent, canActivate: [AdminloginauthService] },
    { path: 'admin/category/active', component: AdmincategoryactiveComponent, canActivate: [AdminloginauthService] },
    { path: 'admin/category/seo', component: AdmincategorychangeseoComponent, canActivate: [AdminloginauthService] },
    { path: 'admin/category/seo/:url', component: AdmincategorymetataginputComponent, canActivate: [AdminloginauthService] },

    { path: 'admin/product/add', component: AdminProductPageComponent, canActivate: [AdminloginauthService] },
    { path: 'admin/product/view', component: AdminViewAllProductsComponent, canActivate: [AdminloginauthService] },
    { path: 'admin/product/specific/:name', component: AdminViewProductDetailsComponent, canActivate: [AdminloginauthService] },
    { path: 'admin/product/active', component: AdminViewAllProductsActiveComponent, canActivate: [AdminloginauthService] },
    { path: 'admin/product/seo', component: AdminViewAllProductsSeoComponent, canActivate: [AdminloginauthService] },
    { path: 'admin/product/seo/:url', component: AdminProductPageSeoComponent, canActivate: [AdminloginauthService] },

    // {path: 'admin/newsletter/view', component: NewsletterComponent, canActivate: [AdminloginauthService]},

    { path: 'admin/blog/add', component: AdmincreateblogComponent, canActivate: [AdminloginauthService] },
    { path: 'admin/blog/view', component: AdminBlogPageWithButtonsComponent, canActivate: [AdminloginauthService] },

    { path: 'admin/content/add', component: AdminContentPageAddComponent, canActivate: [AdminloginauthService] },
    { path: 'admin/content/view', component: AdminViewAllContentPageComponent, canActivate: [AdminloginauthService] },
    { path: 'admin/content/active', component: AdminContentPageWithOptionComponent, canActivate: [AdminloginauthService] },
    { path: 'admin/content/seo', component: AdminContentPageWithSeoComponent, canActivate: [AdminloginauthService] },
    { path: 'admin/content/seo/:url', component: AdminContentWithSeoPageOptionAndMoreComponent, canActivate: [AdminloginauthService] },
    { path: 'admin/content/specific/:url', component: ContentSpecificViewSeoComponent, canActivate: [AdminloginauthService] },

    { path: 'admin/customer/view', component: AdminviewcustomerpageComponent, canActivate: [AdminloginauthService] },
    { path: 'admin/OrderStatus', component: AddOrderStatusComponent, canActivate: [AdminloginauthService] },
    { path: 'admin/OrderStatus/view', component: ViewOrderStatusComponent, canActivate: [AdminloginauthService] },

    // { path: 'admin/content/specific/:url',component:ContentSpecificViewSeoComponent,canActivate:[AdminloginauthService]},
    { path: 'admin/content/specific/:url', component: AdmincontentspecificviewdetailsComponent, canActivate: [AdminloginauthService] },
    { path: 'admin/content/specific/update/:url', component: AdmincontentpageupdateComponent },
    { path: 'admin/discountcode/create', component: DiscountcodecreateComponent },
    { path: 'admin/discountcode/view', component: AdmindiscountcodeViewAllComponent },
    { path: 'admin/discountcode/update', component: AdmindiscountcodeupdatedetailsComponent },
    { path: 'admin/discountcode/viewdetails/:id', component: AdmindiscountcodeviewdetailsComponent },
    { path: 'admin/discountcode/viewdetails/:id', component: AdmindiscountcodeviewdetailsComponent },
    { path: 'admin/orders/viewdetails', component: AdminorderpageComponent },
    { path: 'admin/orders/product/details/:id', component: AdminViewOrderProductsComponent },
    { path: 'admin/stock/manage', component: AdminstockmanageComponent },

    { path: 'admin/contact/view', component: AdminviewcontactComponent, canActivate: [AdminloginauthService] },
    { path: 'admin/businesscontact/view', component: AdminviewbusinesscontactComponent, canActivate: [AdminloginauthService] },
    { path: 'admin/addHomePageBanner', component: HomepageBannerImageComponent, canActivate: [AdminloginauthService] },
    { path: 'admin/addMobileHomePageBanner', component: HomepageMobileBannerComponent, canActivate: [AdminloginauthService] },
    { path: 'admin/StateCrud', component: StateCrudComponent, canActivate: [AdminloginauthService] },
    { path: 'admin/CityCrud', component: CityCrudComponent, canActivate: [AdminloginauthService] },
    { path: 'admin/LocationCrud', component: LocationCrudComponent, canActivate: [AdminloginauthService] },


    //////////////////////////////////////////////////////////////user routes

    { path: 'category/:url', component: UserProductsComponent },
    { path: 'category/:parentUrl/:url', component: UserProductsComponent },
    { path: 'category', component: UserProductsComponent },
    { path: 'search/:search', component: UserProductsComponent },
    { path: 'blog', component: AllBlogsComponent },
    { path: 'blog/:url', component: BlogDetailComponent },
    { path: 'product/:url', component: UserProductDetailsComponent },
    { path: '', component: UserHomepageComponent },
    { path: 'contact', component: UserContactUsComponent },
    { path: 'user/login', component: UserloginComponent },
    { path: 'user/register', component: UserloginComponent },
    { path: 'user/cart', component: UserCartComponent },
    { path: 'user/checkout', component: UserCheckoutComponent },
    { path: 'user/plainheader', component: PlainheaderComponent },



    { path: 'user/myAccount', component: MyAccountComponent },
    { path: 'user/manageAddress', component: MyAccountAddressComponent },



    { path: 'user/orderDetails/:orderId/:productId', component: UserorderDetailsComponent },
    { path: 'user/orderHistory', component: UserorderHistoryComponent },
    { path: 'forgotPassword', component: ForgotPasswordComponent },
    { path: 'user/forgotPasswordCheck/:id', component: SetForgotPasswordComponent },
    { path: 'user/returnpolicy', component: ReturnComponent },
    { path: 'user/privacyPolicy', component: TermsandconditionsComponent },


    { path: 'about', component: UserOurPhilosophyComponent },
    // { path: 'about', redirectTo: '/about', pathMatch: 'full' },
    // { path: 'about/ourJourney', component: UserOurJourneyComponent },
    // { path: 'about/ourIngredients', component: UserOurIngredientsComponent },

    { path: '**', component: Notfound404Component, pathMatch: 'full' }


];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        scrollPositionRestoration: 'enabled'
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
