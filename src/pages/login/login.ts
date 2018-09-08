import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public statusBar: StatusBar) {
    this.statusBar.backgroundColorByHexString('FFFFFF');
    this.statusBar.styleDefault();
  }

  public login() {
    this.navCtrl.setRoot('TasksPage');
    this.navCtrl.goToRoot;
  }

}
