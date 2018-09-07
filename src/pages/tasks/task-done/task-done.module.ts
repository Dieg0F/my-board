import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TaskDonePage } from './task-done';

@NgModule({
  declarations: [
    TaskDonePage,
  ],
  imports: [
    IonicPageModule.forChild(TaskDonePage),
  ],
})
export class TaskDonePageModule {}
