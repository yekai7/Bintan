import { Router } from '@angular/router';
import { DbService } from './../services/db.service';
import { Component, OnInit } from '@angular/core';
import { Activity } from '../model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  constructor(private dbSvc: DbService, private router: Router) { }

  tiles = [];
  actList;
  searchResult:Activity[] = [];

  ngOnInit() {
    this.dbSvc.loadActivities().then(result => {
      this.actList = result;
      this.randomOrder();
      this.setLayout();
    })
  }

  setLayout() {
    for (let a = 0; a < this.actList.length; a++) {
      let obj = {
        img: this.actList[a].image_url,
        name: this.actList[a].name,
        id: this.actList[a]._id,
        cols: 1,
        rows: 1
      }
      if (a == 0 || a == 7) {
        obj.cols = 2;
        obj.rows = 2;
      }
      if (a == 9) {
        break;
      }
      this.tiles.push(obj)
    }
  }

  randomOrder(){
    for (let i = this.actList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i)
      const temp = this.actList[i]
      this.actList[i] = this.actList[j]
      this.actList[j] = temp
    }
  }

  search(value){
    if (value == '')
      this.searchResult = [];
    this.dbSvc.searchActivity(value).then(result=>{
      this.searchResult = result
    })
  }

  navigateTo(id) {
    this.router.navigate(['activity', id])
  }

}
