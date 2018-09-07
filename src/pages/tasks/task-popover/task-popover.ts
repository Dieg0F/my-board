import { Alert } from './../../../util/alert/alert';
import { TaskService } from './../../../services/tasks/task.services';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Task } from '../../../model/task/task.model';
import { Loading } from '../../../util/loading/loading';

@IonicPage()
@Component({
  selector: 'page-task-popover',
  templateUrl: 'task-popover.html',
})
export class TaskPopoverPage {

  public task: Task;
  public desableClick: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public taskService: TaskService,
    public alert: Alert,
    public loading: Loading
  ) {
    this.task = this.navParams.get('task');
  }

  editTask() {
    this.desableClick = true;
  }

  removeTask() {
    this.desableClick = true;
    let loadingCompose = {
      title: 'Removendo Tarefa...'
    };
    this.loading.show(loadingCompose);
    this.taskService.delete(this.task.uid)
      .then(() => { console.log("Success"); this.popoverClose()})
      .catch(() => { console.log("Error"); this.popoverClose()});
  }

  popoverClose(){
    this.loading.hide();
    this.viewCtrl.dismiss();
  }

  removeTaskAlert() {
    let alertCompose = {
      title: 'Remover Task?',
      subTitle: 'Deseja remover a tarefa: ' + this.task.title + '?',
      onConfirm: this.removeTask.bind(this),
      onCancel: this.popoverClose.bind(this)
    }
    this.alert.confirmAlert(alertCompose);
  }
}
