import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.css']
})
export class ActivitiesListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goLeft(){
    this.router.navigate(['chill'])
  }

}
