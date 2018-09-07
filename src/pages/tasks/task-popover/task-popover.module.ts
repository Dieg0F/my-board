import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TaskPopoverPage } from './task-popover';

@NgModule({
  declarations: [
    TaskPopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(TaskPopoverPage),
  ],
})
export class TaskPopoverPageModule {}
