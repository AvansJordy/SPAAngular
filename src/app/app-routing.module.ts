import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {EventsComponent} from "./games/events.component";
import {EventStartComponent} from "./games/event-start/event-start.component";
import {EventEditComponent} from "./games/event-edit/event-edit.component";
import {EventDetailComponent} from "./games/event-detail/event-detail.component";
import {UserAddComponent} from "./games/character-add/character-add.component";
import {LoginRegisterComponent} from "./LoginRegister/loginregister.component";
import {LoginComponent} from "./LoginRegister/Login/login.component";
import {RegisterComponent} from "./LoginRegister/Register/register.component";

const appRoutes: Routes = [
  // { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  // { path: 'recipes', component: RecipesComponent, children: [
  //   { path: '', component: RecipeStartComponent },
  //   { path: 'new', component: RecipeEditComponent },
  //   { path: ':id', component: RecipeDetailComponent },
  //   { path: ':id/edit', component: RecipeEditComponent },
  // ] },
  // { path: 'shopping-list', component: ShoppingListComponent },

  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'login', component: LoginRegisterComponent, children: [
    { path: '', component: LoginRegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }
  ] },
  { path: 'events', component: EventsComponent, children: [
    { path: '', component: EventStartComponent },
    { path: 'new', component: EventEditComponent },
    { path: ':id', component: EventDetailComponent },
    { path: ':id/edit', component: EventEditComponent },
    {path: 'editChar/:id', component: UserAddComponent},
    {path: 'editChar/:id/:charid', component: UserAddComponent}
  ] }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
