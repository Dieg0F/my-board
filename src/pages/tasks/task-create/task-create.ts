import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { TaskService } from '../../../services/tasks/task.services';
import { Task } from '../../../model/task/task.model';
import { DateWindow } from '../../../util/date/dateWindow';

@IonicPage()
@Component({
  selector: 'page-task-create',
  templateUrl: 'task-create.html',
})
export class TaskCreatePage {

  public changeBgModal: boolean = false;
  public blockBtn: boolean = false;
  public task: Task = {
    title: '',
    status: 'TO_DO'
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public dateWindow: DateWindow,
    public taskService: TaskService) {
  }

  ionViewWillEnter() {
    this.changeBgModal = true;
  }

  addTask() {
    if (!this.task.title) return;
    this.blockBtn = true;
    this.taskService.create(this.task)
      .then(() => this.modalClose())
      .catch(() => console.log('Error'));
  }

  modalClose() {
    this.changeBgModal = false;
    setTimeout(() => {
      this.viewCtrl.dismiss();
    }, 300);
  }

  getDate() {
    this.dateWindow.getDate()
  }

}
