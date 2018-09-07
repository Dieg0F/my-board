import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { TaskMenuComponent } from './task-menu/task-menu';

@IonicPage()
@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html',
})
export class TasksPage {

  public toDoPage = 'TaskTodoPage';
  public doing = 'TaskDoingPage';
  public done = 'TaskDonePage';

  constructor(
    public navCtrl: NavController
    ) { }
}
