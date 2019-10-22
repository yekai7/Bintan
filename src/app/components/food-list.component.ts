import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goRight(){
    this.router.navigate(['chill']);
  }

}
