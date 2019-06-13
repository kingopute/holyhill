import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';

import { DevotionalPage } from './../devotional/devotional';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import{Platform}  from 'ionic-angular';
/**
 * Generated class for the DevotionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-devotion',
  templateUrl: 'devotion.html',
})
export class DevotionPage {
devotional = [];
  constructor(private theInAppBrowser: InAppBrowser, private platform: Platform,public navCtrl: NavController, public navParams: NavParams) {

firebase.database().ref('devotional').on('value', snapshot => {
      this.devotional = snapshot.val();
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DevotionPage');
  }

  launch(url){
    this.platform.ready().then(() =>{
      this.theInAppBrowser.create(url,"_self", "location=no");
  });
  }

  series($event, item) {
    this.navCtrl.push(DevotionalPage, {item: item});
  }

}
