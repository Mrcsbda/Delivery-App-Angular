import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent
  ],
  exports: [
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AuthenticationModule { }
