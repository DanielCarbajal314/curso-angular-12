import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {
  counter = 100;
  colorIndex = 0;
  colors = ['red','green','blue','orange','pink'];

  constructor() { }

  ngOnInit(): void {
    console.log('El Segundo Componente se esta creando');
  }

  get buttonStyle(){
    const color = this.colors[this.colorIndex % this.colors.length];
    return `
      width: ${this.counter}px;
      color: ${color};
    `
  }

  increase(){
    this.counter += 20;
  }

  changeColor(){
    this.colorIndex++;
  }

}
