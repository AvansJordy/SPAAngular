import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { AppRoutingModule } from './app-routing.module';


import {EventStartComponent} from "./games/event-start/event-start.component";

import {UserItemComponent} from "./character/user-item/user-item.component";

import {IfnotDirective} from "./directiveCustom";

import {EventDetailComponent} from "./games/event-detail/event-detail.component";
import {EventEditComponent} from "./games/event-edit/event-edit.component";
import {EventService} from "./games/event.service";
import {EventListComponent} from "./games/event-list/event-list.component";
import {EventItemComponent} from "./games/event-list/event-item/event-item.component";
import {UserDetailComponent} from "./character/user-detail/user-detail.component";
import {EventsComponent} from "./games/events.component";
import {UserAddComponent} from "./games/character-add/character-add.component";








@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,


    EventListComponent,
    EventDetailComponent,
    EventEditComponent,

    DropdownDirective,

    IfnotDirective,

    UserDetailComponent,
    UserItemComponent,
    EventItemComponent,
    EventStartComponent,
    EventsComponent,
    UserAddComponent




  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
