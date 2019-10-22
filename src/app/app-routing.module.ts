import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodListComponent } from './components/food-list.component';
import { ChillListComponent } from './components/chill-list.component';
import { ActivitiesListComponent } from './components/activities-list.component';
import { MainComponent } from './components/main.component';


const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'food', component: FoodListComponent},
  {path: 'chill', component: ChillListComponent},
  {path: 'activities', component: ActivitiesListComponent},
  // {path: 'activities/:id', component: ActivityComponent},
  {path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
