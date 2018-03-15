import { Component, OnChanges } from '@angular/core';
import { FormControl , FormGroup , FormBuilder , Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent{
  resetpwdForm: FormGroup; 
  matchvalid:boolean=false;
  constructor(private fb: FormBuilder,private router: Router) {
    this.createForm(); 
   }

   createForm() {
    this.resetpwdForm = this.fb.group({                  
      password:['',Validators.compose([ Validators.required,Validators.minLength(8)])] ,         
      confirmPwd:['',Validators.compose([ Validators.required,Validators.minLength(8)])]           
    });
  }
  validate(){
    console.log(this.resetpwdForm.value.password);
    console.log(this.resetpwdForm.value.confirmPwd);
      if(this.resetpwdForm.value.password==this.resetpwdForm.value.confirmPwd){
        this.matchvalid=true;
      }else{
        this.matchvalid=false;
      }      
  }
  resetPassword(){
    // alert("Successfully changed password.....");
    this.router.navigate(['/login']);
  }
    
}
