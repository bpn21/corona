import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth.routing';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AuthRoutingModule
  ],
  exports : [ ]
})
export class AuthModule { }
