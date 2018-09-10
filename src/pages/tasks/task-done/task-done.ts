import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { Observable } from 'rxjs';
import { Task } from '../../../model/task/task.model';
import { TaskService } from '../../../services/tasks/task.services';

@IonicPage()
@Component({
  selector: 'page-task-done',
  templateUrl: 'task-done.html',
})
export class TaskDonePage {

  tasks$: Observable<Task[]>;

  constructor(
    public navCtrl: NavController,
    public popoverCtrl: PopoverController,
    public taskService: TaskService
  ) { }

  ionViewDidLoad() {
    this.tasks$ = this.taskService.getTasks('DONE').valueChanges();
  }

  presentPopover(event, task: Task) {
    let popover = this.popoverCtrl.create('TaskPopoverPage', {
      task: task
    });
    popover.present({
      ev: event
    });
  }
}
