import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TaskStatusPage } from './task-status';

@NgModule({
  declarations: [
    TaskStatusPage,
  ],
  imports: [
    IonicPageModule.forChild(TaskStatusPage),
  ],
})
export class TaskStatusPageModule {}
