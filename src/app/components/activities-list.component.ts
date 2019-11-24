import { DbService } from './../services/db.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.css']
})
export class ActivitiesListComponent implements OnInit {

  constructor(private router: Router, private dbSvc: DbService) { }

  actList;

  ngOnInit() {
    this.dbSvc.loadCategory(this.router.url).then(result => {
      this.actList = result;
    });
  }

  goTo(id){
    this.router.navigate(['activity', id])
  }

}
