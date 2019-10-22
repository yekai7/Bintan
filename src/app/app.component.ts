import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bintan';
  constructor(private router: Router){}

  navigate(dest = "/"){
    this.router.navigate([dest]);
  }
}
