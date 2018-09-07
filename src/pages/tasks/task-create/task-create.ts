import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { TaskService } from '../../../services/tasks/task.services';
import { Task } from '../../../model/task/task.model';

@IonicPage()
@Component({
  selector: 'page-task-create',
  templateUrl: 'task-create.html',
})
export class TaskCreatePage {

  public changeBgModal: boolean = false;
  public task: Task = {
    title: ''
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public taskService: TaskService) {
  }

  ionViewWillEnter() {
    this.changeBgModal = true;
  }

  addTask(){
    this.taskService.create(this.task)
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
