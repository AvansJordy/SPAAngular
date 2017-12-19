import { Component, OnInit, Input } from '@angular/core';

import { Event } from '../../event.model';

@Component({
  selector: 'app-game-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent implements OnInit {
  @Input() event: Event;
  @Input() index: string;

  ngOnInit() {
    this.index = this.event._id;
  }
}
