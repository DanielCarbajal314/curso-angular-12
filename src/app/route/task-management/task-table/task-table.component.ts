import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.scss']
})
export class TaskTableComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getAllTasks().subscribe(tasks => this.tasks = tasks);
  }

  delete(task: Task){
    this.taskService.deleteTaskById(task.id).subscribe(()=>{
      this.tasks = this.tasks.filter(x => x.id !== task.id);
      // OTRA PETICON HTTTP QUE NECESITE INFORMACION DE LA PRIMERA !!
    });
  }

  addRegisteredTask(task: Task) {
    this.tasks = [ task, ...this.tasks ];
  }

}
