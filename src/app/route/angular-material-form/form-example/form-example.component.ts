import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.scss']
})
export class FormExampleComponent implements OnInit {
  value = ''

  constructor() { }

  ngOnInit(): void {
  }

}
