import { Component, OnInit, ViewChild } from '@angular/core';
import { SquareTitleComponent } from './square-title/square-title.component';
import { Square } from './ssquare/model/square.model';

@Component({
  selector: 'app-orchestration',
  templateUrl: './orchestration.component.html',
  styleUrls: ['./orchestration.component.scss']
})
export class OrchestrationComponent implements OnInit {
  squareArray: Square[] = [
    { size: 100, text: 'Rojo', color: 'red' },
    { size: 120, text: 'Verde', color: 'green' },
    { size: 140, text: 'Azul', color: 'blue' },
    { size: 160, text: 'Amarillo', color: 'yellow' },
    { size: 200, text: 'Purpura', color: 'purple' },
  ];
  clickedSquare?: Square;
  @ViewChild(SquareTitleComponent) squareTitleComponent?: SquareTitleComponent;

  onSquareClicked(square: Square) {
    this.clickedSquare = square;
    this.squareTitleComponent?.showSquare(square);
  }

  get squareClickStyle(){
    return this.clickedSquare ? `
      background-color: ${ this.clickedSquare.color }
    ` : '';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
