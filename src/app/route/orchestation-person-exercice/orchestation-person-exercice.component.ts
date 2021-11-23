import { Component, OnInit, ViewChild } from '@angular/core';
import { Person } from './model/person.model';
import { PersonTableComponent } from './person-table/person-table.component';
import { PersonService } from './services/person.service';

@Component({
  selector: 'app-orchestation-person-exercice',
  templateUrl: './orchestation-person-exercice.component.html',
  styleUrls: ['./orchestation-person-exercice.component.scss']
})
export class OrchestationPersonExerciceComponent implements OnInit {
  peopleCount = 0;

  constructor(private personService: PersonService) { }

  ngOnInit( ): void {
  }

  onPersonCreated(event: Person){
    //this.personTable?.addPerson(event);
    this.personService.addPerson(event);
  }

  onPeopleCountChange(count: number){
    this.peopleCount = count;
  }

}
