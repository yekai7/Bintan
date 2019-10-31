import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor() { }
  activitiesList = [
    { id: 1, name: 'Angsana Spa & Massage', cost: 80, location: 'In resort', img: 'assets/angsana_spa.jpg', category:"chill"},
    { id: 2, name: 'Chill by the beach', cost: 0, location: 'In resort', img: 'assets/vista_restaurant.jpg', category:"chill"},
    { id: 3, name: 'Foam Party!', cost: 0, location: 'In resort', img: 'assets/vista_restaurant.jpg', category:"chill"},
    { id: 4, name: 'Massages', cost: 0, location: 'In resort', img: 'assets/vista_restaurant.jpg', category:"chill"},
    { id: 5, name: 'Vista Restaurant', cost: 30, location: 'In resort', img: 'assets/vista_restaurant.jpg', category:"food"},
    { id: 6, name: 'Buffet @ XANA Beach Club', cost: 60, location: 'In resort', img: 'assets/vista_restaurant.jpg', category:"food"},
    { id: 7, name: 'Mookata', cost: 60, location: 'In resort', img: 'assets/vista_restaurant.jpg', category:"food"},
    { id: 8, name: 'Street Food', cost: 0, location: 'Rimba Jaya', img: 'assets/vista_restaurant.jpg', category:"food"},
    { id: 9, name: 'Foam Party!', cost: 0, location: 'In resort', img: 'assets/vista_restaurant.jpg', category:"chill"},
    { id: 10, name: 'ATV through forest/beach', cost: 45, location: 'In resort', img: 'assets/angsana_spa.jpg', category:"fun"},
    { id: 11, name: 'Test', cost: 60, location: 'In resort', img: 'assets/bg.jpg'},
    { id: 12, name: 'Snorkeling', cost: 85, location: 'Marine Centre, beside the Cassia Bintan infinity pool', img: 'assets/bg.jpg', category:"fun"},
    { id: 13, name: 'Paintball', cost: 45, location: 'In resort', img: 'assets/bg.jpg'},
    { id: 14, name: 'Archery', cost: 15, location: 'In resort', img: 'assets/bg.jpg'},
    { id: 15, name: 'Jet-skiing', cost: 65, location: 'Marine Centre, beside the Cassia Bintan infinity pool', img: 'assets/bg.jpg', category:"fun"},
    { id: 16, name: 'Rock climbing', cost: 20, location: 'Marine Centre, beside the Cassia Bintan infinity pool', img: 'assets/bg.jpg', category:"fun"},
    { id: 17, name: 'Standup Paddle', cost: 25, location: 'Marine Centre, beside the Cassia Bintan infinity pool', img: 'assets/bg.jpg', category:"fun"},
    { id: 18, name: 'Mangrove Sunset', cost: 50, location: 'Marine Centre, beside the Cassia Bintan infinity pool', img: 'assets/bg.jpg', category:"fun"},
    { id: 19, name: 'Island hopping', cost: 150, location: 'Marine Centre, beside the Cassia Bintan infinity pool', img: 'assets/bg.jpg', category:"fun"},
    { id: 20, name: 'Banana boat', cost: 20, location: 'Marine Centre, beside the Cassia Bintan infinity pool', img: 'assets/bg.jpg', category:"fun"}
  ]

  getActivity(id){
    for (let a=0;a<this.activitiesList.length;a++){
      if (this.activitiesList[a].id == id){
        return this.activitiesList[a];
      }
    }
  }

  getActFromCategory(category){
    const alist = [];
    for (let a=0;a<this.activitiesList.length;a++){
      if (this.activitiesList[a].category == category){
        alist.push(this.activitiesList[a]);
      }
    }
    return alist;
  }

  
}
