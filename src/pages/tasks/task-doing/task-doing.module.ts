import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TaskDoingPage } from './task-doing';

@NgModule({
  declarations: [
    TaskDoingPage,
  ],
  imports: [
    IonicPageModule.forChild(TaskDoingPage),
  ],
})
export class TaskDoingPageModule {}
