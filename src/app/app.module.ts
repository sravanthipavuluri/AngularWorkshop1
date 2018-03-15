import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { Profile } from 'selenium-webdriver/firefox';

const appRoutes: Routes = [{path:'',redirectTo:'/confirm',pathMatch:'full'},
  {path:'reg',component:RegistrationComponent},
  {path:'confirm',component:ConfirmComponent},
  {path:'login',component:LoginComponent},
  {path:'resetpwd',component:ResetpasswordComponent},
  {path:'dashboard',component:DashboardComponent,children:[ {path:'profile',component:ProfileComponent},{path:'users',component:ProfileComponent} ]},   
];
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ResetpasswordComponent,
    ConfirmComponent,
    DashboardComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
