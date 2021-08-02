import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { LocationService } from '../../services/location.service'
import { StateService } from 'src/app/services/state.service';
import { CityService } from 'src/app/services/city.service';
@Component({
    selector: 'app-user-checkout',
    templateUrl: './user-checkout.component.html',
    styleUrls: ['./user-checkout.component.css']
})
export class UserCheckoutComponent implements OnInit {
    userObj: any = {};
    company;
    address1;
    address2;
    city;
    state;
    zipCode;
    orderNotes;

    productsArr: any = [];
    shippingCharges = 0;
    subtotal = 0;
    totalPrice = 0;
    cart;
    handlingFee = 0;
    nightCharges = 0;
    deliveryLocation;

    stateArr = []
    cityArr = []
    locationArr = []
    constructor(private user: UserService, private location: LocationService, private stateService: StateService, private cityService: CityService) { }

    ngOnInit() {
        this.getUserInfo();
        // this.getTime();
        // this.getState();
        // this.getLocations();
        // this.getCity()
    }

    // async getState() {
    //     const res: any = await this.stateService.getall();
    //     this.stateArr = res.data
    // }
    // async getCity(){
    //     const res:any=await this.cityService.getall();
    //     this.cityArr=res.data
    // }
    // async getLocations(){
    //     const res:any=await this.location.getall();
    //     this.locationArr=res.data
    // }

    // async setState(val) {
    //     const res: any = await this.cityService.getCitiesByStateId(val);
    //     console.log(val)
    //     let tempObj=this.stateArr.find(el=>el._id==val);
    //     this.state=tempObj.name
    //     this.cityArr = res.data
    // }

    // async setCity(val) {
    //     const res: any = await this.location.getLocationsByCityId(val);
    //     let tempObj=this.cityArr.find(el=>el._id==val);
    //     this.city=tempObj.name
    //     this.locationArr = res.data
    // }

    // async setLocation(val) {
    //     let timeObj;
    //     let tempObj=this.locationArr.find(el=>el._id==val);
    //     this.deliveryLocation=tempObj.name
    //     const res: any = await this.location.getById(val);
    //     console.log(res)
    //     const response: any = await this.user.getTime();
    //     timeObj = response.data
    //     if(timeObj.hour>=23 || timeObj.hour<=4){
    //         this.nightCharges=res.data.nightFee;
    //         this.totalPrice=this.totalPrice+this.nightCharges
    //     }
    // }

    async walletPay() {
        let address = {
            address1: this.address1,
            address2: this.address2,
            city: this.city,
            state: this.state,
            zipCode: this.zipCode,
            location: this.deliveryLocation
        };
        let billingInfo = {
            customerId: this.userObj._id,
            firstname: this.userObj.firstname,
            lastname: this.userObj.lastname,
            email: this.userObj.email,
            phone: this.userObj.phone,
            company: this.company,
            address: address,
        };
        const res: any = await this.user.payFromWallet(billingInfo, this.orderNotes, this.cart, this.totalPrice);
        if (res) {

            console.log(res)
            alert(res.message)
            if (res.success)
                window.location.href = "/"
        }
    }


    async getUserInfo() {
        this.user.getUserDetailsFORCART().subscribe(res => {
            this.userObj = res;
            if (this.userObj)
                this.cart = this.userObj.cart;
            else
                this.cart = this.user.getLocalCart();

            if (!this.userObj) {
                let obj = {
                    firstname: '',
                    lastname: '',
                    phone: '',
                    email: '',
                    _id: 'null'
                }
                this.userObj = obj;
            }
            else {
                if (this.userObj.address) {
                    this.address1 = this.userObj.address.address1;
                    this.address2 = this.userObj.address.address2;
                    this.city = this.userObj.address.city;
                    this.state = this.userObj.address.state;
                    this.zipCode = this.userObj.address.zipCode;
                }
            }

            // console.log(this.userObj);


            this.user.getDataForCheckout(this.cart).subscribe((res: any) => {
                this.cart = res.cart;
                this.subtotal = res.subtotal;
                this.shippingCharges = res.shippingCharges;
                this.handlingFee = res.handlingFee;
                this.totalPrice = res.total;
            })


        })
    }
    orderNow() {
        let address = {
            address1: this.address1,
            address2: this.address2,
            city: this.city,
            state: this.state,
            zipCode: this.zipCode
        };
        let billingInfo = {
            customerId: this.userObj._id,
            firstname: this.userObj.firstname,
            lastname: this.userObj.lastname,
            email: this.userObj.email,
            phone: this.userObj.phone,
            company: this.company,
            address: address,
        };
        // this.cart.forEach(element => {
        //   let obj = {
        //     productId: element.productId,
        //     quantity: element.quantity,
        //     price: element.listPrice,
        //     variantIndex:element.variantIndex,
        //   }
        //   finalProductArr.push(obj)
        // });
        this.user.orderNow(billingInfo, this.orderNotes, this.cart, this.totalPrice)
    }
    async cOD() {
        let address = {
            address1: this.address1,
            address2: this.address2,
            city: this.city,
            state: this.state,
            zipCode: this.zipCode
        };
        let billingInfo = {
            customerId: this.userObj._id,
            firstname: this.userObj.firstname,
            lastname: this.userObj.lastname,
            email: this.userObj.email,
            phone: this.userObj.phone,
            company: this.company,
            address: address,
        };
        // this.cart.forEach(element => {
        //   let obj = {
        //     productId: element.productId,
        //     quantity: element.quantity,
        //     price: element.listPrice,
        //     variantIndex:element.variantIndex,
        //   }
        //   finalProductArr.push(obj)
        // });
        const res: any = await this.user.orderNowCod(billingInfo, this.orderNotes, this.cart, this.totalPrice);
        console.log(res)
        alert(res.message)
        if (res.success)
            window.location.href = "/";
    }
}
