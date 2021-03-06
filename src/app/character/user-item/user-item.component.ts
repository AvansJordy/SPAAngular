import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../../shared/user.model";



@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  @Input() user: User;
  @Input() eventId: string;
  @Input() index: number;
  @Output() userSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSelected() {
    this.userSelected.emit();
  }

}
