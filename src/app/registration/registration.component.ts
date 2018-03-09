import { Component , OnChanges } from '@angular/core';
import { FormControl , FormGroup , FormBuilder , Validators} from '@angular/forms';
import { workStatus,techInterest } from './Dataset';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  registrationForm: FormGroup; 
  workStatus = workStatus;
  techInterest = techInterest;
  constructor(private fb: FormBuilder) { 
    this.createForm(); 
  }

  createForm() {
    this.registrationForm = this.fb.group({
      firstName:['', Validators.required],
      lastName:['',Validators.required],
      email:['',Validators.compose([Validators.required ,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')])],
      mobile:['',Validators.compose([Validators.required,Validators.pattern('\\d{9}')])],
      wrkstatus:['',Validators.required],
      techInterests:['',Validators.required],
      btnSubmit:['']
      // address: this.fb.group({ // <-- the child FormGroup
      //   street: ['', Validators.required ],
      //   city: ['', Validators.required ],
      //   location: ['', Validators.required ],
      //   zip: ['', Validators.compose([Validators.required ,Validators.minLength(5),Validators.pattern('\\d{5}')])]
      //  })      
    });
  }
  registerData(){
    alert("Successfully Submitted.....");
  }
    ngOnChanges() {
      this.registrationForm.reset({
        name: "",
        address: ""
      });
    }

}
