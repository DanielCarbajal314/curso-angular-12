import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit, OnDestroy {

  constructor() { }
  ngOnDestroy(): void {
    console.log('El Segundo Componente se esta Destruyendo !!!!!!');
  }

  ngOnInit(): void {
    console.log('El Segundo Componente se esta creando');
  }

}
