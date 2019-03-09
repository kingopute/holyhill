import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';

import { DevotionaldetailsPage } from './../devotionaldetails/devotionaldetails';
/**
 * Generated class for the DevotionalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-devotional',
  templateUrl: 'devotional.html',
})
export class DevotionalPage {
 //devotional = [];
 item = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
     //firebase.database().ref('devotional').on('value', snapshot => {
     // this.devotional = snapshot.val().reverse();
    //});
    this.item = navParams.get('item')
  }
   episodes($event, subitem) {
    this.navCtrl.push(DevotionaldetailsPage, {subitem: subitem});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DevotionalPage');
  }

}
