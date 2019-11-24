import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivitiesListComponent } from './components/activities-list.component';
import { MainComponent } from './components/main.component';
import { ActivityComponent } from './components/activity.component';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'main', component: MainComponent },
  { path: 'food', component: ActivitiesListComponent },
  { path: 'chill', component: ActivitiesListComponent },
  { path: 'fun', component: ActivitiesListComponent },
  { path: 'activity/:id', component: ActivityComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
