import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { fadeAnimation } from './animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeAnimation]
})
export class AppComponent {
  title = 'Bintan';
  constructor(private router: Router){}

  navigate(dest = "/"){
    this.router.navigate([dest]);
  }
}
