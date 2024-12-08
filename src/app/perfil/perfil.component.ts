import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-perfil',
  imports: [NgIf],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
  userData: any;
  constructor(private authService: AuthService){
  
  this.authService.userData$.subscribe((data) => {
    this.userData = data;
    console.log('Datos recibidos en el componente:', this.userData);
  });
  
}
}
