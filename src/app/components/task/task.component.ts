import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  constructor(private _taskService: TaskService){}

  ngOnInit(): void {
      this._taskService.getAllTask().subscribe(res => {
        console.log(res);
      })
  }
}
