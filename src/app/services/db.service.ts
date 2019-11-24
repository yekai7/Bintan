import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Activity } from '../model';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private http: HttpClient) { }
  // activitiesList = [
  //   { id: 4, name: 'Massages', cost: 0, location: 'In resort', img: 'assets/massage.jpg', category:"chill"},
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

  url = 'https://bintan-server.herokuapp.com';
  loadActivities(): Promise<any> {
    return this.http.get(`${this.url}/api/activities`).toPromise();
  }

  loadCategory(category: string): Promise<any> {
    return this.http.get(`${this.url}/api/activities${category}`).toPromise();
  }

  getActivity(id): Promise<any> {
    return this.http.get(`${this.url}/api/activity/${id}`).toPromise();
  }

  searchActivity(name: string): Promise<any> {
    const params = new HttpParams;
    return this.http.get<Activity[]>(`${this.url}/api/search?q=${name}`, { params }).toPromise();
  }

  getCategory(): Promise<any> {
    return this.http.get(`${this.url}/api/category`).toPromise()
  }
}
