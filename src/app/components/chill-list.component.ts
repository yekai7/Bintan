import { DbService } from './../services/db.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chill-list',
  templateUrl: './chill-list.component.html',
  styleUrls: ['./chill-list.component.css']
})
export class ChillListComponent implements OnInit {

  constructor(private router: Router, private dbSvc: DbService) { }

  chillList;

  ngOnInit() {
    this.dbSvc.loadCategory('chill').then(result=>{
      this.chillList = result;
      console.log(this.chillList);
    });
  }

  // goRight(){
  //   this.router.navigate(['activities']);
  // }

  // goLeft(){
  //   this.router.navigate(['food'])
  // }
  goTo(id){
    this.router.navigate(['activity', id])
  }

}
