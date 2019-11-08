import { Router } from '@angular/router';
import { DbService } from './../services/db.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  constructor(private dbSvc: DbService, private router: Router) { }

  tiles = [];

  ngOnInit() {
    this.getData();
  }

  getData(){
    let actList = this.dbSvc.activitiesList;
    for (let i = actList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i)
      const temp = actList[i]
      actList[i] = actList[j]
      actList[j] = temp
    }

    for (let a = 0; a < actList.length; a++) {
      let obj = {
        img: actList[a].img,
        name: actList[a].name,
        id: actList[a].id,
        cols: 1,
        rows: 1
      }
      if (a == 0 || a == 7 ) {
        obj.cols = 2;
        obj.rows = 2;
      }
      if (a == 9) {
        break;
      }
      this.tiles.push(obj)
    }
  }
 

  navigateTo(id) {
    this.router.navigate(['activity', id])
  }

}
