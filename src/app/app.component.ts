import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'my-first-project-sunat';

  constructor() {
    console.log('Creando El Componente');
  }
  ngOnInit(): void {
    console.log('El Componente esta iniciando');
  }
}
