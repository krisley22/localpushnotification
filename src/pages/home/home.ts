import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private localNotifications: LocalNotifications, private platform: Platform) {

  }

  buttonPushClicked() {
    this.platform.ready().then(() => {
      this.localNotifications.schedule({
        title: 'Teste push local notification',
        text: 'Delayed ILocalNotification',
        trigger: {at: new Date(new Date().getTime() + 3600)},
        led: 'FF0000',
        sound: null
     });
    });
  }
}
