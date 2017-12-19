import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {environment} from '../../environments/environment';
import {Http, Headers} from '@angular/http';
import {Event} from './event.model';
import {EventUser} from "./eventuser.model";

@Injectable()
export class EventService {
  eventChanged = new Subject<Event[]>();

  private headers = new Headers({'Content-Type': 'application/json'});
  private serverUrl = environment.serverUrl + '/events/';
  private serverNeoUrl = environment.serverUrlRel;

  private events: Event[];
  private users: EventUser[];

  constructor(private http: Http) {

  }

  getEvents() {
    console.log('getEvents');
    return this.http.get(this.serverUrl, {headers: this.headers})
      .toPromise()
      .then(response => {
        this.events = response.json() as Event[];
        return response.json() as Event[];
      })
      .catch(error => {
        return error;
      });


  }

  getEvent(index: string) {
    if (index == null)
      return null;
    return this.http.get(this.serverUrl + index, {headers: this.headers})
      .toPromise()
      .then(response => {
        return response.json();
      })
      .catch(error => {
        console.log(error);
        return error;
      });
  }

  // getGamesRel(genre: String) {
  //   return this.http.get(this.serverNeoUrl + genre, {headers: this.headers})
  //     .toPromise()
  //     .then(response => {
  //       // this.series = response.json() as Serie[];
  //       return response.json() as Game[];
  //     })
  //     .catch(error => {
  //       return error;
  //     });
  //
  //
  // }

  getUsers() {
    return this.http.get(environment.serverUrlChar, {headers: this.headers})
      .toPromise()
      .then(response => {
        this.users = response.json() as EventUser[];
        return response.json() as EventUser[];
      })
      .catch(error => {
        return error;
      });

  }

  getUser(index: string) {
    if (index == null)
      return null;
    return this.http.get(environment.serverUrlChar + index, {headers: this.headers})
      .toPromise()
      .then(response => {
        return response.json();
      })
      .catch(error => {
        console.log(error);
        return error;
      });
  }

  addUser(id: string, char: EventUser, event: Event) {
    console.log('addUser');

    return this.http.post(environment.serverUrlChar, char, {headers: this.headers})
      .toPromise()
      .then(response => {

        return response.json() as EventUser;
      })
      .catch(error => {
        return error;
      });
  }


  addEvent(event: Event) {
    return this.http.post(this.serverUrl, event, {headers: this.headers})
      .toPromise()
      .then(response => {
        this.eventChanged.next(this.events);
      });
  }

  updateEvent(index: string, newEvent: Event) {
    return this.http.put(this.serverUrl + index, newEvent, {headers: this.headers})
      .toPromise()
      .then(response => {
        this.eventChanged.next(this.events);
      });
  }

  updateUser(id: string, newChar: EventUser) {
    console.log('update');
    return this.http.put(environment.serverUrlChar + id, newChar, {headers: this.headers})
      .toPromise()
      .then(response => {
        this.eventChanged.next(this.events);
      });
  }

  deleteEvent(index: string) {
    return this.http.delete(this.serverUrl + index, {headers: this.headers})
      .toPromise()
      .then(response => {
        this.eventChanged.next(this.events.slice());
      });
  }

  deleteUser(id: string) {
    return this.http.delete(environment.serverUrlChar + id, {headers: this.headers})
      .toPromise()
      .then(response => {
        this.eventChanged.next(this.events.slice());
      });
  }

}
