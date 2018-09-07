import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, ModalController } from 'ionic-angular';
import { Observable } from 'rxjs';
import { Task } from '../../../model/task/task.model';
import { TaskService } from '../../../services/tasks/task.services';

@IonicPage()
@Component({
  selector: 'page-task-todo',
  templateUrl: 'task-todo.html',
})
export class TaskTodoPage {

  tasks$: Observable<Task[]>;

  constructor(
    public navCtrl: NavController,
    public popoverCtrl: PopoverController,
    public modalCtrl: ModalController,
    public taskService: TaskService
  ) { }

  ionViewDidLoad() {
    this.tasks$ = this.taskService.getDoneTasks(false).valueChanges();
  }

  presentPopover(event, task: Task) {
    let popover = this.popoverCtrl.create('TaskPopoverPage', {
      task: task
    });
    popover.present({
      ev: event
    });
  }

  addNewTask(){
    let modal = this.modalCtrl.create('TaskCreatePage')
    modal.present();
  }
}
