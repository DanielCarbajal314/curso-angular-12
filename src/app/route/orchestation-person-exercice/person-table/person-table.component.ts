import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Person } from '../model/person.model';

@Component({
  selector: 'person-table',
  templateUrl: './person-table.component.html',
  styleUrls: ['./person-table.component.scss']
})
export class PersonTableComponent implements OnInit {
  people: Person[] = [];
  @Output() peopleCountChange = new EventEmitter<number>();
  get peopleCount(){
    return this.people.length;
  }

  constructor() { }

  ngOnInit(): void {
  }

  public addPerson(person: Person){
    this.people = [ person, ...this.people ];
    this.peopleCountChange.emit(this.peopleCount);
  }

}
