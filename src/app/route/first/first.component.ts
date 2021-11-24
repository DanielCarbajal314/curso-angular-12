import { Component, OnDestroy, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit, OnDestroy {
  name = 'Daniel';
  time?: string;

  constructor() { }
  ngOnDestroy(): void {
    console.log('El Primer Componente se esta destruyendo!!!!');
  }

  ngOnInit(): void {
    console.log('El Primer Componente se esta creando');
    timer(1000, 1000).pipe(
      map(() => new Date()),
      map(date => date.toLocaleTimeString())
    ).subscribe(time => this.time = time);
    

  }

}
