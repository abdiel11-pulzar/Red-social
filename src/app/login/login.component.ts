import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
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

onLogin() {
    console.log("Login Data:", this.loginData);
}

onRegister() {
    console.log("Register Data:", this.registerData);
}
}
