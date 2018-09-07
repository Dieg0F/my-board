import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TasksPage } from './tasks';
import { TaskMenuComponent } from './task-menu/task-menu';

@NgModule({
  declarations: [
    TasksPage,
    TaskMenuComponent
  ],
  imports: [
    IonicPageModule.forChild(TasksPage),
  ],
})
export class TasksPageModule {}
