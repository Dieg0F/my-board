import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TaskConfigurationPage } from './task-configuration';

@NgModule({
  declarations: [
    TaskConfigurationPage,
  ],
  imports: [
    IonicPageModule.forChild(TaskConfigurationPage),
  ],
})
export class TaskConfigurationPageModule {}
