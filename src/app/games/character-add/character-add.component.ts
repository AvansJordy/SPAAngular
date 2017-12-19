import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators, FormArray} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {forEach} from '@angular/router/src/utils/collection';
import {EventUser} from "../eventuser.model";
import {Event} from "../event.model";
import {EventService} from "../event.service";

@Component({
  selector: 'app-add-character',
  templateUrl: './character-add.component.html',
  styleUrls: ['./character-add.component.css']
})
export class UserAddComponent implements OnInit {
  id: string;
  idChar: string;
  edit = false;
  event: Event;
  users: EventUser;
  characterRes: EventUser;
  userForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private eventService: EventService,
              private router: Router) {
  }

  ngOnInit() {

    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.idChar = params['charid'];
      this.edit = params['charid'] != null;
      console.log(this.edit);
      this.initForm();
      this.eventService.getEvent(this.id)
        .then(events => this.event = events);

    });
  }

  onSubmit() {
    if (this.edit) {
      console.log(this.userForm.value);
      this.router.navigate(['events/' + this.id]);
      this.eventService.updateUser(this.idChar, this.userForm.value);
    } else {
      this.eventService.addUser(this.idChar, this.userForm.value, this.event)
        .then(res =>
          this.event.users.push({'_id': res._id})
        )
        .then(() => this.eventService.updateEvent(this.id, this.event));
      this.router.navigate(['events/' + this.id]);
    }
  }

  onCancel() {
    this.router.navigate(['/events/' + this.id]);
  }

  private initForm() {

    if (this.edit) {
      this.eventService.getUser(this.idChar).then((res) => console.log(res));
      this.eventService.getUser(this.idChar)
        .then(char => {
          this.users = char;

          this.userForm = new FormGroup({
            'name': new FormControl(this.users.name, Validators.required)
          });
        });


    }


    this.userForm = new FormGroup({
      'name': new FormControl('', Validators.required)
    });
  }


}
