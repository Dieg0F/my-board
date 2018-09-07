import { AlertController } from "ionic-angular";
import { Injectable } from "@angular/core";

@Injectable()
export class Alert {

  constructor(private alertCtrl: AlertController) { }

  confirmAlert(alertCompose: any) {
    let alert = this.alertCtrl.create({
      title: alertCompose.title,
      message: alertCompose.subTitle,
      buttons: [
        {
          text: 'Não',
          role: 'não',
          handler: () => {
            alertCompose.onCancel()
          }
        },
        {
          text: 'Sim',
          handler: () => {
            alertCompose.onConfirm()
          }
        }
      ]
    });
    alert.present();
  }

}
