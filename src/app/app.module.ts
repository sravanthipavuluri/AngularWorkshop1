import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PersonServiceService } from './person-Service.service';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { Profile } from 'selenium-webdriver/firefox';
import { ProfileeditComponent } from './profileedit/profileedit.component';
import { UsersComponent } from './users/users.component';
import { ThankComponent } from './thank/thank.component';

const appRoutes: Routes = [{path:'',redirectTo:'/confirm',pathMatch:'full'},
  {path:'reg',component:RegistrationComponent},
  {path:'confirm',component:ConfirmComponent},
  {path:'login',component:LoginComponent},
  {path:'resetpwd',component:ResetpasswordComponent},
  {path:'dashboard',component:DashboardComponent,
  children:[ {path:'profile',component:ProfileComponent,children:[{path:'profileedit',component:ProfileeditComponent}]},
             {path:'users',component:UsersComponent} ]},   
  {path:'thank',component:ThankComponent},             
];
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ResetpasswordComponent,
    ConfirmComponent,
    DashboardComponent,
    ProfileComponent,
    ProfileeditComponent,
    UsersComponent,
    ThankComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PersonServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
