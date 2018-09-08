import { ToastController } from 'ionic-angular';
import { Injectable } from '@angular/core';

@Injectable()
export class Toast {
  constructor(
    private toastCtrl: ToastController
  ) { }

  show(toastCompose: any) {
    let toast = this.toastCtrl.create({
      message: toastCompose.title,
      duration: toastCompose.time,
      position: 'bottom'
    });
    toast.present();
  }
}
