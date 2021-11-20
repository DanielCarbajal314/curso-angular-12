import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Square } from './model/square.model';

@Component({
  selector: 'square',
  templateUrl: './ssquare.component.html',
  styleUrls: ['./ssquare.component.scss']
})
export class SsquareComponent implements OnInit {
  @Input() square?: Square;
  @Output() squareClicked = new EventEmitter<Square>();

  get squareStyle(){
    const size = this.square?.size ?? 100;
    return `
      width: ${ size }px;
      height: ${ size }px;
      background-color: ${this.square?.color ?? 'red'};
    `
  }

  squareClick() {
    this.squareClicked.emit(this.square);
  }

  constructor() { }

  ngOnInit(): void {
  }

}