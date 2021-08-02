import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {StateService} from '../../services/state.service'
@Component({
  selector: 'app-state-crud',
  templateUrl: './state-crud.component.html',
  styleUrls: ['./state-crud.component.css']
})
export class StateCrudComponent implements OnInit {

  stateForm:FormGroup
  stateArr=[]

  constructor(private fb:FormBuilder,private state:StateService) { }

  ngOnInit(): void {
    this.stateForm=this.fb.group({
      name:['',Validators.required]
    });
    this.getStates();
  }


  async getStates(){
    const res:any=await this.state.getall();
    this.stateArr=res.data
  }
  async handleSubmit(){
    // console.log(this.stateForm)
    if(this.stateForm.status=='VALID'){
      const res:any =await this.state.add(this.stateForm.value);
      this.ngOnInit()
      alert(res.message)
    }
    else{
      alert('Invalid form')
    }
  }

}
