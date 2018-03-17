import { Component, OnInit } from '@angular/core';
import { person } from '../Dataset';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  personArr:Array<any>;
  constructor() { 
    this.personArr=[
        {name:"Sravanthi Pavuluri",email:"Sravanthi@hotmail.com",college:"St.Ann's College",city:"Hyderabad",workingstatus:"Employee"},
        {name:"Naveen Vedala",email:"Naveen@hotmail.com",college:"ECE NNRG College",city:"Hyderabad",workingstatus:"Employee"},
        {name:"Mahamod Mujaid",email:"Naveen@hotmail.com",college:"ECE NNRG College",city:"Hyderabad",workingstatus:"Employee"},
        {name:"Tarun Dilikar",email:"Naveen@hotmail.com",college:"ECE NNRG College",city:"Hyderabad",workingstatus:"Employee"},
        {name:"Hari Poorna",email:"Naveen@hotmail.com",college:"ECE NNRG College",city:"Hyderabad",workingstatus:"Employee"},
        {name:"Sreekanth",email:"Naveen@hotmail.com",college:"ECE NNRG College",city:"Hyderabad",workingstatus:"Employee"},
        {name:"Manideep",email:"Naveen@hotmail.com",college:"ECE NNRG College",city:"Hyderabad",workingstatus:"Employee"},
        {name:"Mahesh",email:"Naveen@hotmail.com",college:"ECE NNRG College",city:"Hyderabad",workingstatus:"Employee"},
        {name:"Hari Prasad",email:"Naveen@hotmail.com",college:"ECE NNRG College",city:"Hyderabad",workingstatus:"Employee"},
        {name:"Veera Reddy",email:"Naveen@hotmail.com",college:"ECE NNRG College",city:"Hyderabad",workingstatus:"Employee"},
        {name:"Konda Reddy",email:"Naveen@hotmail.com",college:"ECE NNRG College",city:"Hyderabad",workingstatus:"Employee"},
        {name:"Somya kalyani",email:"Naveen@hotmail.com",college:"ECE NNRG College",city:"Hyderabad",workingstatus:"Employee"},
        {name:"Sravya",email:"Naveen@hotmail.com",college:"ECE NNRG College",city:"Hyderabad",workingstatus:"Employee"},
        {name:"Sikha Singh",email:"Naveen@hotmail.com",college:"ECE NNRG College",city:"Hyderabad",workingstatus:"Employee"},
        {name:"Manasa Ch",email:"Naveen@hotmail.com",college:"ECE NNRG College",city:"Hyderabad",workingstatus:"Employee"},
        {name:"Krupa Varma",email:"Naveen@hotmail.com",college:"ECE NNRG College",city:"Hyderabad",workingstatus:"Employee"},       
    ];
  }
  
  ngOnInit() {
  }

}
