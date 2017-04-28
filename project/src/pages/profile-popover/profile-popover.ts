import { Component } from '@angular/core';

import { App, NavController, ModalController, ViewController } from 'ionic-angular';


@Component({
  template: `
    <ion-list>
      <button ion-item (click)="listUserOrg()">User's organisations</button>
      <button ion-item (click)="close('http://ionicframework.com/docs/v2')">Documentation</button>
      <button ion-item (click)="close('http://showcase.ionicframework.com')">Showcase</button>
      <button ion-item (click)="close('https://github.com/driftyco/ionic')">GitHub Repo</button>
      <button ion-item (click)="support()">Support</button>
    </ion-list>
  `
})
export class PopoverProfilePage {

  constructor(
    public viewCtrl: ViewController,
    public navCtrl: NavController,
    public app: App,
    public modalCtrl: ModalController
  ) { }

  support() {
    this.app.getRootNav().push('SupportPage');
    this.viewCtrl.dismiss();
  }

  listUserOrg() {
      console.log('list user org');
  }

  close(url: string) {
    window.open(url, '_blank');
    this.viewCtrl.dismiss();
  }
}