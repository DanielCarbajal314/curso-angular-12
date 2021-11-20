import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-exercise',
  templateUrl: './directive-exercise.component.html',
  styleUrls: ['./directive-exercise.component.scss']
})
export class DirectiveExerciseComponent implements OnInit {

  isMarried = false;
  couplesName = '';
  taskName = '';
  myTasks: string[] = [];

  addNewTask(){
    this.myTasks.push(this.taskName);
    this.taskName = '';
  }
  
  ngOnInit(): void {
  }

}
