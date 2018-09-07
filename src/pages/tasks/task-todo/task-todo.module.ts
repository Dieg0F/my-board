import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TaskTodoPage } from './task-todo';

@NgModule({
  declarations: [
    TaskTodoPage,
  ],
  imports: [
    IonicPageModule.forChild(TaskTodoPage),
  ],
})
export class TaskTodoPageModule {}
