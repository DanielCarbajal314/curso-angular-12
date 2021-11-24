import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PersonDialogComponent } from './person-dialog/person-dialog.component';

@Component({
  selector: 'app-angular-material-form',
  templateUrl: './angular-material-form.component.html',
  styleUrls: ['./angular-material-form.component.scss']
})
export class AngularMaterialFormComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  registerNewPerson(){
    this.dialog.open(PersonDialogComponent, { width: '50%'})
  }

}
