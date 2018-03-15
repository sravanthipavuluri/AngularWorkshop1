import { Component, OnInit } from '@angular/core';
import { person } from '../DataSet';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 
  perObj:person;

  constructor() { 
    this.perObj={
      name: "SravanthiPavuluri",      
      email : "spavuluri@digitallyhnctech.com" ,
      college :  "St.Ann's College",
      city : "Guntur",
      workingstatus :"Employee",
      technologies:"Fullstack Development",
      profilepic:"../assets/images/mypic.jpg"
    } 
  }

  ngOnInit() {
  }

}
