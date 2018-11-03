import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HeaderColor } from "@ionic-native/header-color";
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { TaskService } from '../services/tasks/task.services';
import { Alert } from '../util/alert/alert';
import { Loading } from '../util/loading/loading';
import { Toast } from '../util/toast/toast';
import { DateWindow } from '../util/date/dateWindow';
import { DatePicker } from '@ionic-native/date-picker';

export const firebase = {
  apiKey: 'AIzaSyCCOGwrfmWqxw9CsW1N2yrV7oIHXF-kpeQ',
  authDomain: 'angular-firebase-tasks-bd545.firebaseapp.com',
  databaseURL: 'https://angular-firebase-tasks-bd545.firebaseio.com',
  projectId: 'angular-firebase-tasks-bd545',
  storageBucket: 'angular-firebase-tasks-bd545.appspot.com',
  messagingSenderId: '838601679802'
}

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: true
    }),
    AngularFireModule.initializeApp(firebase),
    AngularFirestoreModule.enablePersistence(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    HeaderColor,
    SplashScreen,
    StatusBar,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    TaskService,
    Alert,
    DateWindow,
    DatePicker,
    Loading,
    Toast
  ]
})
export class AppModule { }
