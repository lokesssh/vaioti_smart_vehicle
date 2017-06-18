import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MainPage} from "../main/main";
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  bus_number: string;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController,public alertCtrl: AlertController) {

  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 1000
    });
    loader.present();
  }

  gotosecondpage() {
    if (this.bus_number == "123456") {
      this.presentLoading();
      this.navCtrl.push(MainPage, {"bus_number": this.bus_number});
      this.bus_number = "";
    }
    else {
      this.showAlert();
    }

  }
  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Invalid Number!',
      subTitle: 'Please Enter Valid Number',
      buttons: ['OK']
    });
    alert.present();
  }
}
