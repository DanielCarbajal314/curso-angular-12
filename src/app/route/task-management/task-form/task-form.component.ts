import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {
  description = '';
  date = new Date(); 
  @Output() newTaskRegistered = new EventEmitter<Task>();

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  save() {
    const { description, date } = this;
    this.taskService.registerNewTask({ description, date }).subscribe(task => {
      this.newTaskRegistered.emit(task);
    });
    // En VES DE HACER ESTO, UTILIZO CARACTERISTA DE es6
    // this.taskService.registerNewTask({ description: this.description, date: this.date});
    this.date = new Date();
    this.description = '';
  }

}
