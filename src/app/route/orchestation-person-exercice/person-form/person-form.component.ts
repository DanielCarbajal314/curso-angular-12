import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Person } from '../model/person.model';

@Component({
  selector: 'person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss']
})
export class PersonFormComponent implements OnInit {
  name = '';
  date?:Date = undefined;
  @Output() personCreated = new EventEmitter<Person>();

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    const { name, date } = this;
    this.personCreated.emit({ name, birthday: date });
    this.name = '';
    this.date = undefined;
  }

}
