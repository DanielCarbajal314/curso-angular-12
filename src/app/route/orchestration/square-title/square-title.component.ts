import { Component, OnInit } from '@angular/core';
import { Square } from '../ssquare/model/square.model';

@Component({
  selector: 'square-title',
  templateUrl: './square-title.component.html',
  styleUrls: ['./square-title.component.scss']
})
export class SquareTitleComponent implements OnInit {
  square?: Square;

  constructor() {}

  ngOnInit(): void {
  }

  showSquare(square: Square){
    this.square = square;
  }

}
