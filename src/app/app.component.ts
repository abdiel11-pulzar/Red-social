import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isUserLoggedIn  : boolean = false;
  title = 'redSocial';

  constructor(private authService: AuthService){
    
    this.subscribeToAuthStatus();

  }

 
  subscribeToAuthStatus() {
    this.authService.userStatus$.subscribe((isLoggedIn) => {
      this.isUserLoggedIn = isLoggedIn;
      console.log('¿Usuario logueado?:', this.isUserLoggedIn);
      if (isLoggedIn) {
        const user = this.authService.getCurrentUser();
        console.log('Usuario actual:', user?.email);
      }
    });
  }
}
