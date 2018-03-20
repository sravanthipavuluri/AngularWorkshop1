import { Component, OnInit } from '@angular/core';
import { person } from '../Dataset';
import { PersonServiceService } from '../person-Service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  personArr:Array<any>;
  constructor(private pservice:PersonServiceService) {     
    this.personArr = pservice.getAllProfiles();
  }
  
  ngOnInit() {
  }

}
