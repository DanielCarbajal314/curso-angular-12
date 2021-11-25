import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Person } from './model/person.model';

@Injectable({
  providedIn: 'root'
})
export class HttpExampleService {

  constructor(private http: HttpClient) { }

  getAll():Observable<Person[]>{
    return this.http.get<Person[]>('/people').pipe(
      map(people => people.map(person => ({
        ...person,
        date: new Date(person.date)
      })))
    )
  }

}
