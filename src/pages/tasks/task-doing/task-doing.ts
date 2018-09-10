import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, ModalController } from 'ionic-angular';
import { Observable } from 'rxjs';
import { Task } from '../../../model/task/task.model';
import { TaskService } from '../../../services/tasks/task.services';


@IonicPage()
@Component({
  selector: 'page-task-doing',
  templateUrl: 'task-doing.html',
})
export class TaskDoingPage {

  tasks$: Observable<Task[]>;

  constructor(
    public navCtrl: NavController,
    public popoverCtrl: PopoverController,
    public modalCtrl: ModalController,
    public taskService: TaskService
  ) { }

  ionViewDidLoad() {
    this.tasks$ = this.taskService.getTasks('TO_DOING').valueChanges();
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
