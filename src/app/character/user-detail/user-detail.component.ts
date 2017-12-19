import {Component, Input, OnInit} from '@angular/core';
import {User} from "../user.model";



@Component({
  selector: 'app-character-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  @Input() user: User;
  @Input() eventId: string;
  @Input() i: number;
  constructor() { }

  ngOnInit() {
  }
}
