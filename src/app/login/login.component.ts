import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  state = LoginCompState.LOGIN;
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
}

onRegister() {
    console.log("Register Data:", this.registerData);
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

