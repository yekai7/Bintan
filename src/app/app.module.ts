import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActivitiesListComponent } from './components/activities-list.component';
import { FoodListComponent } from './components/food-list.component';
import { ChillListComponent } from './components/chill-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MainComponent } from './components/main.component';
import { DbService } from './services/db.service';

@NgModule({
  declarations: [
    AppComponent,
    ActivitiesListComponent,
    FoodListComponent,
    ChillListComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
