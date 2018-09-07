import { LoadingController } from "ionic-angular";
import { Injectable } from "@angular/core";


@Injectable()
export class Loading {

  private loader: any;

  constructor(public loadingCtrl: LoadingController) {
  }

  show(loadingCompose: any) {
    this.loader = this.loadingCtrl.create({
      content: loadingCompose.title
    });
    this.loader.present();
  }

  hide(){
    this.loader.dismiss();
  }
}
