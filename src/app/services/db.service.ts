import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private http: HttpClient) { }
  // activitiesList = [
  //   { id: 1, name: 'Angsana Spa & Massage', cost: 80, location: 'In resort', url:'https://www.angsanaspa.com/', img: 'assets/angsana_spa.jpg', category:"chill"},
  //   { id: 2, name: 'Chill by the beach', cost: 0, location: 'In resort', img: 'assets/beach.jpg', category:"chill"},
  //   { id: 4, name: 'Massages', cost: 0, location: 'In resort', img: 'assets/massage.jpg', category:"chill"},
  //   { id: 5, name: 'Vista Restaurant', cost: 30, location: 'In resort', img: 'assets/vista_restaurant.jpg', category:"food"},
  //   { id: 6, name: 'Buffet @ XANA Beach Club', cost: 60, location: 'In resort', img: 'assets/xanabuffet.jpg', category:"food"},
  //   { id: 7, name: 'Mookata', cost: 60, location: 'In resort', img: 'assets/mookata.jpg', category:"food"},
  //   { id: 8, name: 'Street Food', cost: 0, location: 'Rimba Jaya', img: 'assets/streetfood.jpg', category:"food"},
  //   { id: 9, name: 'Foam Party!', cost: 0, location: 'In resort', img: 'assets/foamparty.jpg', category:"chill"},
  //   { id: 10, name: 'ATV through forest/beach', cost: 45, location: 'In resort', img: 'assets/atv.jpg', category:"fun"},
  //   { id: 12, name: 'Snorkeling', cost: 85, location: 'Marine Centre, beside the Cassia Bintan infinity pool', img: 'assets/snorkeling.jpg', category:"fun"},
  //   { id: 13, name: 'Paintball', cost: 45, location: 'In resort', img: 'assets/paintball.jpg'},
  //   { id: 14, name: 'Archery', cost: 15, location: 'In resort', img: 'assets/archery.jpg'},
  //   { id: 15, name: 'Jet-skiing', cost: 65, location: 'Marine Centre, beside the Cassia Bintan infinity pool', img: 'assets/jetski.jpg', category:"fun"},
  //   { id: 16, name: 'Rock climbing', cost: 20, location: 'Marine Centre, beside the Cassia Bintan infinity pool', img: 'assets/rockclimbing.jpg', category:"fun"},
  //   { id: 17, name: 'Standup Paddle', cost: 25, location: 'Marine Centre, beside the Cassia Bintan infinity pool', img: 'assets/standpaddle.jpg', category:"fun"},
  //   { id: 18, name: 'Mangrove Sunset', cost: 50, location: 'Marine Centre, beside the Cassia Bintan infinity pool', img: 'assets/mangrove.jpg', category:"fun"},
  //   { id: 19, name: 'Island hopping', cost: 150, location: 'Marine Centre, beside the Cassia Bintan infinity pool', img: 'assets/islandhopping.jpg', category:"fun"},
  //   { id: 20, name: 'Banana boat', cost: 20, location: 'Marine Centre, beside the Cassia Bintan infinity pool', img: 'assets/bananaboat.jpg', category:"fun"}
  // ]

  // getActivity(id) {
  //   for (let a = 0; a < this.activitiesList.length; a++) {
  //     if (this.activitiesList[a].id == id) {
  //       return this.activitiesList[a];
  //     }
  //   }
  // }

  // getActFromCategory(category) {
  //   const alist = [];
  //   for (let a = 0; a < this.activitiesList.length; a++) {
  //     if (this.activitiesList[a].category == category) {
  //       alist.push(this.activitiesList[a]);
  //     }
  //   }
  //   return alist;
  // }
  loadActivities(){
    return this.http.get(`http://localhost:3000/api/activities`).toPromise();
  }

  loadCategory(category:string){
    return this.http.get(`http://localhost:3000/api/activities/${category}`).toPromise();
  }

  getActivity(id){
    return this.http.get(`http://localhost:3000/api/activity/${id}`).toPromise();
  }
}
