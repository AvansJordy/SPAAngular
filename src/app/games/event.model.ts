//
// Domain class
//

import {Platform} from '../shared/platform.model';
import {User} from '../shared/user.model';
export class Event {

  private id: string;
  private _name: string;
  private _price: string;
  private _sportHall: string;
  private _sport: string;
  private _availability: string;
  private _users: [object];


  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
  public get _id(): string {
    return this.id;
  }

  public set _id(n: string) {
    this.id = n;
  }

  public get name(): string {
    return this._name;
  }

  public set name(n: string) {
    this._name = n;
  }

  public get price(): string {
    return this._price;
  }

  public set price(g: string) {
    this._price = g;
  }

  public get sportHall(): string {
    return this._sportHall;
  }

  public set sportHall(g: string) {
    this._sportHall = g;
  }

  public get sport(): string {
    return this._sport;
  }

  public set sport(g: string) {
    this._sport = g;
  }

  public get availability(): string {
    return this._availability;
  }

  public set availability(g: string) {
    this._availability = g;
  }


  public get users() {
    return this._users;
  }

  public set users(n: [object]) {
    this._users = n;
  }


}
