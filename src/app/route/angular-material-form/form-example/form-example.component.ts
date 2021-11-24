import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.scss']
})
export class FormExampleComponent implements OnInit {
  value = ''
  foods = [
    {value: 'steak-0', viewValue: 'Criolla'},
    {value: 'pizza-1', viewValue: 'Chifa'},
    {value: 'tacos-2', viewValue: 'Pollo a la Brasa'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
