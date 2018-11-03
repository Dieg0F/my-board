import { DatePicker } from '@ionic-native/date-picker';
import { Injectable } from "@angular/core";

@Injectable()
export class DateWindow {

  constructor(private datePicker: DatePicker) { }

  getDate() {
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => console.log('Got date: ', date),
      err => console.log('Error occurred while getting date: ', err)
    );
  }
}
