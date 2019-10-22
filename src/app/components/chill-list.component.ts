import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chill-list',
  templateUrl: './chill-list.component.html',
  styleUrls: ['./chill-list.component.css']
})
export class ChillListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goRight(){
    this.router.navigate(['activities']);
  }

  goLeft(){
    this.router.navigate(['food'])
  }

}
