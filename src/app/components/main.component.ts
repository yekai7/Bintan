import { DbService } from './../services/db.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private dbSvc: DbService) { }

  ngOnInit() {
  }
  activities = this.dbSvc.activitiesList;
  randomAct;
  //not working, intending to integrate with db first
  processSearch(value){
    if(value.length == 0) {
      return this.activities = [];
    }
    this.activities = this.dbSvc.activitiesList;
  }
  
  getRandomAct(){
    const ranNum = Math.floor(Math.random() * this.activities.length) +1
    this.randomAct = this.activities[ranNum];
  }
}
