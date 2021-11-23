import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NewTask } from '../models/new-task.model';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAllTasks() {
    return this.http.get<Task[]>(`${this.baseUrl}/tasks`);
  }

  registerNewTask(task: NewTask) {
    return this.http.post<Task>(`${this.baseUrl}/tasks`, task);
  }

  deleteTaskById(id: string) {
    return this.http.delete<void>(`${this.baseUrl}/tasks/${id}`);
  }

}
