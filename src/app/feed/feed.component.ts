import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { MatDialog } from '@angular/material/dialog';
import { NgFor } from '@angular/common';
import { CrearPostComponent } from '../crear-post/crear-post.component';

@Component({
  selector: 'app-feed',
  imports: [NgFor],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.css'
})
export class FeedComponent {
  userData: any;
  constructor(private dialog : MatDialog, private authService: AuthService){
  
  this.authService.userData1$.subscribe((data) => {
    this.userData = data;
    
  });
}

crear()
{
  this.dialog.open(CrearPostComponent);
}
}
