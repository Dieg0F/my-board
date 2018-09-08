import { Alert } from './../../../util/alert/alert';
import { TaskService } from './../../../services/tasks/task.services';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Task } from '../../../model/task/task.model';
import { Loading } from '../../../util/loading/loading';
import { Toast } from '../../../util/toast/toast';

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
    public loading: Loading,
    public toast: Toast
  ) {
    this.task = this.navParams.get('task');
  }

  editTask() {
    this.desableClick = true;
  }

  removeTask() {
    this.popoverClose();
    this.desableClick = true;
    let loadingCompose = {
      title: 'removendo tarefa...'
    };
    this.loading.show(loadingCompose);
    this.taskService.delete(this.task.uid)
      .then(this.taskSuccess.bind(this, 'Tarefa removida!'))
      .catch(this.taskError.bind(this, 'Erro ao remover!'));
  }

  taskSuccess(message: string){
    this.loading.hide();
    let toastCompose = {
      title: message,
      time: 3000
    }
    this.toast.show(toastCompose);
  }


  taskError(message: string){
    let toastCompose = {
      title: 'Hou um erro ao criar a tardefa',
      time: 3000
    }
    this.toast.show(toastCompose);
  }

  popoverClose(){
    this.viewCtrl.dismiss();
  }

  removeTaskAlert() {
    let alertCompose = {
      title: 'Remover tarefa',
      subTitle: 'Deseja excluir a tarefa ' + this.task.title + '?',
      onConfirm: this.removeTask.bind(this),
      onCancel: this.popoverClose.bind(this)
    }
    this.alert.confirmAlert(alertCompose);
  }
}
