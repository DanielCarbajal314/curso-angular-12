import { Injectable } from '@angular/core';
import { Person } from '../model/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  public people: Person[] = [];

  constructor() { }

  public addPerson(person: Person){
    this.people = [person, ...this.people];
  }
}
