import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-admin-admin-dashboard',
  templateUrl: './admin-admin-dashboard.component.html',
  styleUrls: ['./admin-admin-dashboard.component.css']
})
export class AdminAdminDashboardComponent implements OnInit {

  constructor(private admin: AdminService) { }

  topSellingArr;
  productArr;
  customerArr;
  tempDateWiseArr: any = [];
  dateWiseArr: any = [];
  theFinalArr1: any = []; //date wise sold
  downloadCustomerArr: Array<any> = [];

  ngOnInit() {
    this.getDashboardDetails();

  }

  getDashboardDetails() {
    this.admin.getDashboardDetails().subscribe((res: any) => {
      this.topSellingArr = res.topSellingArr;
      this.productArr = res.productArr;
      this.customerArr = res.customerArr
      this.customerArr.forEach(el => {
        el.dateAdded = new Date(el.dateAdded).toLocaleTimeString() + " " + new Date(el.dateAdded).toDateString();
        let obj: any = {
          firstname: el.firstname,
          lastname: el.lastname,
          email: el.email,
          dateSignedUp: el.dateAdded,
          phone: el.phone,
        }
        if (el.gender == 1)
          obj.gender = "Female"
        else
          obj.gender = "Male"

        this.downloadCustomerArr.push(obj);
      });



      // console.log(res);
      this.admin.getOrders().subscribe((res: any) => {
        let orderArr = res;
        // console.log(res)
        orderArr.forEach(el => {
          if (el.paymentFlag) {

            el.cart.forEach(ele => {
              let obj = {
                dateAdded: new Date(el.dateAdded),
                name: ele.name,
                quantity: ele.quantity,
                amount: ele.listPrice * ele.quantity,
                orderId: el._id
              }
              this.tempDateWiseArr.push(obj);
              // console.log(typeof(el.dateAdded))
            });


          }
        });

        let arr = [];
        this.tempDateWiseArr.forEach(el => {
          this.tempDateWiseArr.forEach(ele => {
            if (((el.dateAdded.getFullYear() == ele.dateAdded.getFullYear()) && (el.dateAdded.getMonth() == ele.dateAdded.getMonth())) && (el.dateAdded.getDate() == ele.dateAdded.getDate())) {
              let obj: any = {
                dateAdded: el.dateAdded.getDate() + "-" + el.dateAdded.getMonth() + "-" + el.dateAdded.getFullYear()
              }
              let dateIndex = this.theFinalArr1.findIndex(elx => elx.dateAdded === obj.dateAdded);
              if (dateIndex == -1) {
                obj.arr = [{ name: ele.name, quantity: ele.quantity, amount: ele.amount, orderId: [ele.orderId] }];
                this.theFinalArr1.push(obj);
              }
              else {
                let nameIndex = this.theFinalArr1[dateIndex].arr.findIndex(elex => elex.name == ele.name)
                if (nameIndex == -1) {
                  this.theFinalArr1[dateIndex].arr.push({ name: ele.name, quantity: ele.quantity, amount: ele.amount, orderId: [ele.orderId] });
                }
                else {
                  let orderIndex = this.theFinalArr1[dateIndex].arr[nameIndex].orderId.indexOf(ele.orderId);
                  if (orderIndex == -1) {
                    this.theFinalArr1[dateIndex].arr[nameIndex].amount += ele.amount;
                    this.theFinalArr1[dateIndex].arr[nameIndex].quantity += ele.quantity;
                    this.theFinalArr1[dateIndex].arr[nameIndex].orderId.push(ele.orderId);
                  }
                }
              }

            }
          });
        });

        // console.log(this.theFinalArr1);
        this.theFinalArr1 = this.theFinalArr1.reverse();
        // console.log(this.tempDateWiseArr)
      })
    })
  }




  //json to csv

  convertToCSVAndDownload(data: any, fileName: String = "myFile") {
    const replacer = (key, value) => value === null ? '' : value; // specify how you want to handle null values here
    const header = Object.keys(data[0]);
    // console.log(header, data[0])
    let csv = data.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','));

    // console.log("After 1")
    // console.log(csv)
    csv.unshift(header.join(','));
    // console.log(csv)
    let csvArray = csv.join('\r\n');
    // console.log(csvArray)

    var a = document.createElement('a');
    var blob = new Blob([csvArray], { type: 'text/csv' }),
      url = window.URL.createObjectURL(blob);

    a.href = url;
    a.download = fileName + ".csv";
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
  }


  exportCustomerData() {
    this.convertToCSVAndDownload(this.downloadCustomerArr, "customerData");
  }


  exportSalesData() {
    // console.log(this.productArr)
    let tempArr: Array<any> = [];
    this.productArr.forEach(el => {
      el.listPrice.forEach(ele => {

        let obj = {
          name: el.name,
          variantName: ele.variantName,
          variantSold: ele.variantSold,
        }
        tempArr.push(obj)



      });
    });

    this.convertToCSVAndDownload(tempArr, "salesData");
  }






  exportTopSellingData() {
    // console.log(this.topSellingArr)
    this.convertToCSVAndDownload(this.topSellingArr, "TopSellingData")
  }


  exportSalesByDate() {
    // console.log(this.theFinalArr1)

    //converting to csv format
    const replacer = (key, value) => value === null ? '' : value; // specify how you want to handle null values here

    let data=[];


    this.theFinalArr1.forEach(el => {
      // console.log(el)
      data.push(" "+el.dateAdded);

      // console.log(el.arr)
      let tempArr = []
      if(el.arr)
      el.arr.forEach(ele => {
        let obj = {
          name:ele.name,
          quantity:ele.quantity,
          amount: ele.amount,
        }
        tempArr.push(obj)
      });

    const header = Object.keys(tempArr[0]);
    // console.log(tempArr)

    let csv = tempArr.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','));
    csv.unshift(header.join(','));

      // console.log(csv)

      csv.forEach(element=>{
        data.push(element)
      })

      data.push('\r\n');




    });

    // console.log(data)

    let csvArray = data.join('\r\n');
    // console.log(csvArray)
    if(data.length>0)
    {

      
      var a = document.createElement('a');
      var blob = new Blob([csvArray], { type: 'text/csv' }),
      url = window.URL.createObjectURL(blob);
      
      a.href = url;
      a.download = "salesByDate.csv";
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove();
    }


  }


  exportAll()
  {
    this.exportCustomerData()
    this.exportSalesByDate();
    this.exportSalesData();
    this.exportTopSellingData();
  }


}