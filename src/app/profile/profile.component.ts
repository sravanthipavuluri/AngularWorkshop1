import { Component, OnInit } from '@angular/core';
import { person } from '../DataSet';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
 
  perObj:person;
  editclk:boolean=false;
  empDisable:boolean=false;
  emaillblenable:boolean=true;
  namelblenable:boolean=true;
  citylblenable:boolean=true;
  collblenable:boolean=true;
  splblenable:boolean=true;
  yoplblenable:boolean=true;
  orglblenable:boolean=true;
  wrklblenable:boolean=true;
  techlblenable:boolean=true;
  constructor(private router: Router) { 
    // this.perObj={
    //   name: "SravanthiPavuluri",      
    //   email : "spavuluri@digitallyhnctech.com" ,
    //   college :  "St.Ann's College",
    //   city : "Guntur",
    //   workingstatus :"Employee",
    //   technologies:"Fullstack Development",
    //   profilepic:"../assets/images/mypic.jpg",
    //   specialization:"",
    //   yearOfpass:"",
    //   orgName:"",
    //   wrkexp:"",
    //   profileeditpic:"../assets/images/edit.png",
    // }     
    this.perObj = JSON.parse(localStorage.getItem("SravanthiPavuluri"));
    
    this.emaillblenable=true;
    this.namelblenable=true;
    this.citylblenable=true;
    this.collblenable=true;
    this.splblenable=true;
    this.yoplblenable=true;
    this.orglblenable=true;
    this.wrklblenable=true;
    this.techlblenable=true;
  }
  
  EditProfile(){
      this.editclk=true;
      // this.perObj={
      //   name: "SravanthiPavuluri",      
      //   email : "spavuluri@digitallyhnctech.com" ,
      //   college :  "St.Ann's College",
      //   city : "Guntur",
      //   workingstatus :"Employee",
      //   technologies:"Fullstack Development",
      //   profilepic:"../assets/images/profilepic.jpg",
      //   specialization:"cse",
      //   yearOfpass:"2017",
      //   orgName:"Digitallync Technologies",
      //   wrkexp:"6 yrs",
      //   profileeditpic:"../assets/images/edit.png",
      // }          
  }
  SaveProfile(){
    this.editclk=false;
    localStorage.setItem(this.perObj.name, JSON.stringify(this.perObj));
  }
  enableDisableData(event){
    //console.log("in enableDisableData"+event.target.checked);
    if(!event.target.checked){
      this.empDisable=true;
    }else{
      this.empDisable=false;
    }
  }
  Editvalue(from:string,profileForm:HTMLFormElement){
    //console.log("from-------"+from);
    if(from=="name"){     
      this.namelblenable=false;
    }
    else if(from=="email"){     
      this.emaillblenable=false;
    }
    else if(from=="city"){     
      this.citylblenable=false;
    }
    else if(from=="college"){     
      this.collblenable=false;
    }
    else if(from=="specialization"){     
      this.splblenable=false;
    }
    else if(from=="yearofpass"){     
      this.yoplblenable=false;
    }
    else if(from=="organization"){     
      this.orglblenable=false;
    }
    else if(from=="work"){     
      this.wrklblenable=false;
    }
    else if(from=="technology"){     
      this.techlblenable=false;
    }
  }

  toggleClass(from:string){
    const isValid=this.namelblenable && this.namelblenable;
    //alert("isValid    :"+isValid);
    // if(from=="name")
    // {
      if(isValid)
      {
        return {fieldView:isValid};
      }else
      {
        return {fieldViewToggle:isValid};
      }
    // } 
    // else if(from=="txtname")
    // {
    //   if(isValid)
    //   {
    //     return {fieldViewToggle:isValid};
    //   }else
    //   {
    //     return {fieldView:isValid};
    //   } 
    // }
  }
}
