import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { StateService } from 'src/app/services/state.service';
import {CityService} from '../../services/city.service';
import {LocationService} from '../../services/location.service'
@Component({
  selector: 'app-location-crud',
  templateUrl: './location-crud.component.html',
  styleUrls: ['./location-crud.component.css']
})
export class LocationCrudComponent implements OnInit {

  locationForm:FormGroup
  stateArr=[];
  cityArr=[];
  locationArr=[];

  constructor(private fb:FormBuilder,private state:StateService,private city:CityService,private location:LocationService) { }

  ngOnInit(): void {
    this.locationForm=this.fb.group({
      name:['',Validators.required],
      stateId:['',Validators.required],
      cityId:['',Validators.required],
      nightFee:['',Validators.required]
    });
    this.getStates();
    this.getCities();
    this.getLocation();
  }


  async getStates(){
    const res:any=await this.state.getall();
    this.stateArr=res.data
  }
  async getLocation(){
    const res:any=await this.location.getall();
    this.locationArr=res.data
  }
  async setState(val){
    this.locationForm.get('stateId').patchValue(val);
    const res:any=await this.city.getCitiesByStateId(val);
    this.cityArr=res.data;
  }
  async setCity(val){
    this.locationForm.get('cityId').patchValue(val);
  }
  async getCities(){
    const res:any=await this.city.getall();
    this.cityArr=res.data;
  }
  async handleSubmit(){
    // console.log(this.stateForm)
    if(this.locationForm.status=='VALID'){
      console.log(this.locationForm.value)
      const res:any =await this.location.add(this.locationForm.value);
      this.ngOnInit()
      alert(res.message)
    }
    else{
      alert('Invalid form')
    }
  }


}
