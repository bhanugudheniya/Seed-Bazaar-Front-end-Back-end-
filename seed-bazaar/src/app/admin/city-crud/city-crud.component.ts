import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { StateService } from 'src/app/services/state.service';
import {CityService} from '../../services/city.service'
@Component({
  selector: 'app-city-crud',
  templateUrl: './city-crud.component.html',
  styleUrls: ['./city-crud.component.css']
})
export class CityCrudComponent implements OnInit {

  cityForm:FormGroup
  stateArr=[];
  cityArr=[]

  constructor(private fb:FormBuilder,private state:StateService,private city:CityService) { }

  ngOnInit(): void {
    this.cityForm=this.fb.group({
      name:['',Validators.required],
      stateId:['',Validators.required]
    });
    this.getStates();
    this.getCities();
  }


  async getStates(){
    const res:any=await this.state.getall();
    this.stateArr=res.data
  }
  setState(val){
    this.cityForm.get('stateId').patchValue(val);
  }
  async getCities(){
    const res:any=await this.city.getall();
    this.cityArr=res.data
  }
  async handleSubmit(){
    // console.log(this.stateForm)
    if(this.cityForm.status=='VALID'){
      console.log(this.cityForm.value)
      const res:any =await this.city.add(this.cityForm.value);
      this.ngOnInit()
      alert(res.message)
    }
    else{
      alert('Invalid form')
    }
  }


}
