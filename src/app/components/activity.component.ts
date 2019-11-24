import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DbService } from '../services/db.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  constructor(private aRoute : ActivatedRoute, private dbSvc: DbService) { }

  activity;
  ngOnInit() {
    this.dbSvc.getActivity(this.aRoute.snapshot.params.id).then(result=>{
      this.activity = result
      console.log(result)
    }).catch(err=>{
      console.log(err);
    });
  }

}
