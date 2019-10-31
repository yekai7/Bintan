import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodListComponent } from './components/food-list.component';
import { ChillListComponent } from './components/chill-list.component';
import { ActivitiesListComponent } from './components/activities-list.component';
import { MainComponent } from './components/main.component';
import { ActivityComponent } from './components/activity.component';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'main', component: MainComponent },
  { path: 'food', component: FoodListComponent },
  { path: 'chill', component: ChillListComponent },
  { path: 'activities', component: ActivitiesListComponent },
  { path: 'activity/:id', component: ActivityComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
