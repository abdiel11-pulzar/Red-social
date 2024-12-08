import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  state = LoginCompState.LOGIN;
  constructor(private authServide : AuthService){

  }
  loginData = {
    email: '',
    password: ''
  };

registerData = {
    firstName: '',
    lastName: '',
    career: '',
    email: '',
    password: ''
};
recoveryData = {
  email: ''
};
onPasswordRecovery() {
  console.log("Password Recovery Data:", this.recoveryData);
}

onLogin() {
    console.log("Login Data:", this.loginData);
    if(this.loginData.email && this.loginData.password){
      this.authServide.login(this.loginData.email, this.loginData.password)
    }else{
      alert("Completa todos los campos")
    }
}

onRegister() {
    console.log("Register Data:", this.registerData);
    if(this.registerData.firstName && this.registerData.lastName && this.registerData.career
      && this.registerData.email && this.registerData.password
    ){
      this.authServide.registro(this.registerData.email,this.registerData.password,this.registerData.firstName,this.registerData.lastName,this.registerData.career)
    }else{
      alert("Completa todos los campos")
    }
}
//state

ForgotPassClick() {
  this.state = LoginCompState.FORGOT_PASSWORD;
}
CreateAccountClick() {
  this.state = LoginCompState.REGISTER;
}
LoginClick() {
  this.state = LoginCompState.LOGIN;
}

isLoginState() {
  return this.state == LoginCompState.LOGIN;
}
isRegisterState() {
  return this.state == LoginCompState.REGISTER;
}
isForgotPasswordState() {
  return this.state == LoginCompState.FORGOT_PASSWORD;
}

}
export enum LoginCompState {
  LOGIN,
  REGISTER,
  FORGOT_PASSWORD

}

