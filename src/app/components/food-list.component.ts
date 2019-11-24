import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DbService } from '../services/db.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  constructor(private router: Router, private dbSvc:DbService) { }
  foodList;

  ngOnInit() {
    this.dbSvc.loadCategory('food').then(result=>{
      this.foodList = result;
      console.log(this.foodList);
    });
  }
  goRight(){
    this.router.navigate(['chill']);
  }

  goTo(id){
    this.router.navigate(['activity', id])
  }
}
