import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HeaderColor } from "@ionic-native/header-color";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = 'LoginPage';

  constructor(platform: Platform, splashScreen: SplashScreen, statusBar: StatusBar, headerColor: HeaderColor) {
    headerColor.tint("#F44336");
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.backgroundColorByHexString('FFFFFF');
      splashScreen.hide();
    });
  }
}

