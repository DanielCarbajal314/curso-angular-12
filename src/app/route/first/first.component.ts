import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit, OnDestroy {
  name = 'Daniel';

  constructor() { }
  ngOnDestroy(): void {
    console.log('El Primer Componente se esta destruyendo!!!!');
  }

  ngOnInit(): void {
    console.log('El Primer Componente se esta creando');
  }

}
