import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Response } from '@angular/http';
import {EventService} from '../event.service';
import {User} from "../../character/user.model";
import {EventUser} from "../eventuser.model";

import { Event } from '../event.model';


@Component({
  selector: 'app-game-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css']
})
export class EventEditComponent implements OnInit {
  id: string;
  eventForm: FormGroup;
  idChar: string;
  editMode = false;
  selectedGenre: string;
  users: EventUser;
  event: Event;

  constructor(private route: ActivatedRoute,
              private eventService: EventService,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
        this.idChar = params['charid'];
        this.id = params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
        // this.gameService.getGame(this.id)
        //   .then(games => this.game = games);
      }
    );
  }

  onSubmit() {
    // const newRecipe = new Recipe(
    //   this.recipeForm.value['name'],
    //   this.recipeForm.value['description'],
    //   this.recipeForm.value['imagePath'],
    //   this.recipeForm.value['ingredients']);
    if (this.editMode) {
      this.eventService.updateEvent(this.id, this.eventForm.value);
    } else {
      this.eventService.addEvent(this.eventForm.value);
      this.eventService.getEvents()
        .then(events => {
          this.eventService.eventChanged.next(events.slice());
        });
    }
    this.onCancel();
  }


  // onAddCharacter() {
  //   (<FormArray>this.gameForm.get('characters')).push(
  //     new FormGroup({
  //       'name': new FormControl(null, Validators.required),
  //       'imagePath': new FormControl(null)
  //     })
  //   );
  // }
  //
  // onDeleteCharacter(index: number) {
  //   (<FormArray>this.gameForm.get('characters')).removeAt(index);
  // }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let editevent = new Event({name: '', price: ''});

    // const GameCharacters = new FormArray([]);

    if (this.editMode) {
      this.eventService.getEvent(this.id)
        .then(event => {
          editevent = event;
          // if (game['characters']) {
          //   for (const character of game.characters) {
          //     GameCharacters.push(
          //       new FormGroup({
          //         'name': new FormControl(character.name, Validators.required),
          //         'imagePath': new FormControl(character.imagePath)
          //       })
          //     );
          //
          //   }
          // }
          this.eventForm = new FormGroup({
            'name': new FormControl(editevent.name, Validators.required),
            'price': new FormControl(editevent.price, Validators.required),
            'sportHall': new FormControl(editevent.sportHall, Validators.required),
            // 'characters': GameCharacters,
            'sport': new FormControl(editevent.sport, Validators.required),
            'availability': new FormControl(editevent.availability, Validators.required)
          });
        })
        .catch(error => console.log(error));
    }

    this.eventForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'price': new FormControl(0, Validators.required),
      'sportHall': new FormControl('', Validators.required),
      'sport': new FormControl('', Validators.required),
      'availability': new FormControl('', Validators.required),
      'users': new FormArray([])
    });
  }

}
