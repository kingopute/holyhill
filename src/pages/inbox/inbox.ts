import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { InboxdetailsPage } from './../inboxdetails/inboxdetails';
/**
 * Generated class for the InboxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inbox',
  templateUrl: 'inbox.html',
})
export class InboxPage {
  inbox = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    firebase.database().ref('inbox').on('value', snapshot => {
      this.inbox = snapshot.val().reverse();
    });


  }

  noti($event, item) {
    this.navCtrl.push(InboxdetailsPage, {item: item});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InboxPage');
  }

}
