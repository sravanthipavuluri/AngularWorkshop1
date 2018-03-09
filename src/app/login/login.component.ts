import { Component , OnChanges } from '@angular/core';
import { FormControl , FormGroup , FormBuilder , Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup; 
  constructor(private fb: FormBuilder) { 
    this.createForm(); 
  }
  createForm() {
    this.loginForm = this.fb.group({            
      email:['',Validators.compose([Validators.required ,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')])],
      password:['',Validators.compose([ Validators.required,Validators.minLength(8)])]           
    });
  }
  registerData(){
    alert("Successfully Submitted.....");
  }
    ngOnChanges() {
      this.loginForm.reset({
        name: "",
        address: ""
      });
    }
}
