import { Component, OnInit, ViewChild } from '@angular/core';
import { Task } from './models/task.model';
import { TaskTableComponent } from './task-table/task-table.component';

@Component({
  selector: 'app-task-management',
  templateUrl: './task-management.component.html',
  styleUrls: ['./task-management.component.scss']
})
export class TaskManagementComponent implements OnInit {
  @ViewChild(TaskTableComponent) taskTable?: TaskTableComponent;

  constructor() { }

  ngOnInit(): void {
  }

  onNewTaskRegistered(event: Task){
    this.taskTable!.addRegisteredTask(event);
  }

}
