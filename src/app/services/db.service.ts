import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor() { }
  chill = [
    { name: 'Angsana Spa & Massage', cost: 73, location: 'In resort', img: '../assets/angsana_spa.jpg'},
    { name: 'Chill by the beach', cost: 0, location: 'In resort', img: '../assets/vista_restaurant.jpg'}
  ];

  food = [
    { name: 'Vista Restaurant', cost: 30, location: 'In resort', img: '../assets/vista_restaurant.jpg'},
    { name: 'Buffet @ XANA Beach Club', cost: 60, location: 'In resort', img: '../assets/vista_restaurant.jpg'},
  ];

  activities = [
    { name: 'Foam Party!', cost: 0, location: 'In resort', img: './assets/vista_restaurant.jpg'},
    { name: 'ATV through forest/beach', cost: 60, location: 'In resort', img: '../assets/vista_restaurant.jpg'}

  ]
}
