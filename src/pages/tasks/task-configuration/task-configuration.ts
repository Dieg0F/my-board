import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { TaskService } from '../../../services/tasks/task.services';
import { Task } from '../../../model/task/task.model';


@IonicPage()
@Component({
  selector: 'page-task-configuration',
  templateUrl: 'task-configuration.html',
})
export class TaskConfigurationPage {

  public changeBgModal: boolean = false;
  public blockBtn: boolean = false;
  public task: Task;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public taskService: TaskService) {
    this.task = this.navParams.get('task');
  }

  ionViewWillEnter() {
    this.changeBgModal = true;
  }

  modalClose() {
    this.changeBgModal = false;
    setTimeout(() => {
      this.viewCtrl.dismiss();
    }, 300);
  }

}
