import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {
  name = ''

  get nameIsNotValid(){
    return this.name.length < 3;
  }

  constructor() { }

  ngOnInit(): void {
  }

  clean(){
    this.name = '';
  }

}
