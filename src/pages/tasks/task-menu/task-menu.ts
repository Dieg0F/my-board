import { Component, Input, Inject, Injectable } from '@angular/core';
import { NavController } from 'ionic-angular';

@Injectable()
@Component({
  selector: 'task-menu',
  templateUrl: 'task-menu.html'
})
export class TaskMenuComponent {

  @Input() navCtrl: NavController;

  constructor() {
  }

  public logout(){
    this.navCtrl.setRoot('LoginPage');
    this.navCtrl.goToRoot;
  }

}
