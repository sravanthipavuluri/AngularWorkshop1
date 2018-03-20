import { Component , OnChanges } from '@angular/core';
import { FormControl , FormGroup , FormBuilder , Validators} from '@angular/forms';
import { workStatus,techInterest,register } from '../Dataset';
import { Router } from '@angular/router';
import { PersonServiceService } from '../person-Service.service';
import * as nodemailer from 'nodemailer';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  registrationForm: FormGroup; 
  workStatus = workStatus;
  techInterest = techInterest;
  robj:register;
  constructor(private fb: FormBuilder,private router: Router,private pservice:PersonServiceService) { 
    this.createForm(); 
  }

  createForm() {
    this.registrationForm = this.fb.group({
      firstName:['', Validators.required],
      lastName:['',Validators.required],
      email:['',Validators.compose([Validators.required ,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')])],                                                                             
      mobile:['',Validators.compose([Validators.required,Validators.pattern('\\d{9}')])],
      wrkstatus:['Work Status',Validators.required],
      techInterests:['',Validators.required]         
    });
  }
  registerData(){    
    this.robj={
      firstName:this.registrationForm.value.firstName,
      lastName :  this.registrationForm.value.lastName,
      email :  this.registrationForm.value.email,
      mobile :  this.registrationForm.value.mobile,
      work :  this.registrationForm.value.wrkstatus,
      tinterest :  this.registrationForm.value.techInterests
    }   
    console.log("firstName : "+this.robj.firstName);
    console.log("lastName : "+this.robj.lastName);
    console.log("email : "+this.robj.email);
    console.log("mobile : "+this.robj.mobile);
    console.log("work : "+this.robj.work);
    console.log("tinterest : "+this.robj.tinterest);
    this.resetvalues();    
    this.pservice.CallMail();
    this.router.navigate(['/confirm']);
    
  }
    resetvalues() {
      this.registrationForm.reset({
        firstName: "",
        lastName: "",
        email:"",
        mobile:"",
        wrkstatus:"",
        techInterests:""
      });
    }

}
