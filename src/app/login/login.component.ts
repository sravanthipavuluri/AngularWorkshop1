import { Component , OnChanges } from '@angular/core';
import { FormControl , FormGroup , FormBuilder , Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup; 
  successlogin:boolean=true;
  constructor(private fb: FormBuilder,private router:Router) { 
    this.createForm(); 
  }
  createForm() {
    this.loginForm = this.fb.group({            
      email:['',Validators.compose([Validators.required ,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')])],
      password:['',Validators.compose([ Validators.required,Validators.minLength(8)])]           
    });
  }
  loginData(){   
    if(this.loginForm.value.email=='admin@dl.com' && this.loginForm.value.password=='admin123'){
      this.successlogin=true;
      this.router.navigate(['/dashboard']);
    }else{
      this.successlogin=false;
    }
  }
   
}
