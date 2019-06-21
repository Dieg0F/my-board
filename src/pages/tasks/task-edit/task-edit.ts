import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { TaskService } from '../../../services/tasks/task.services';
import { Task } from '../../../model/task/task.model';

/**
 * Generated class for the TaskEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-task-edit',
  templateUrl: 'task-edit.html',
})
export class TaskEditPage {

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

  addTask(){
    if(!this.task.title) return;
    this.blockBtn = true;
    this.taskService.update(this.task)
    .then(() => this.modalClose())
    .catch(() => console.log('Error'));
  }

  modalClose(){
    this.changeBgModal = false;
    setTimeout(()=>{
      this.viewCtrl.dismiss();
    }, 300);
  }
}
