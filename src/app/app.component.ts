import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { fadeAnimation } from './animation';
import { DbService } from './services/db.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeAnimation]
})
export class AppComponent {
  title = 'Bintan';
  category = [];
  constructor(private router: Router, private dbSvc: DbService){}

  ngOnInit() {
    this.dbSvc.getCategory().then(result=>{
      this.category = result;
    })
  }

  navigate(dest = "/"){
    this.router.navigate([dest]);
  }
}
