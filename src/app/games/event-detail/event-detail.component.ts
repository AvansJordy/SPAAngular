import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Event } from '../event.model';
import {EventService} from '../event.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  event: Event = new Event();
  id: string;

  constructor(private eventService: EventService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.eventService.getEvent(this.id).then(res => {
            this.event = res;
          });
        }
      );
  }

  onEditEvent() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onEditUser() {
    this.router.navigate([':id/:charid'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }


  onDeleteEvent() {
    this.eventService.deleteEvent(this.id);
    this.router.navigate(['/events']);
  }

}
