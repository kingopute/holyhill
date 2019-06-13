import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
/**
 * Generated class for the StreamaudioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-streamaudio',
  templateUrl: 'streamaudio.html',
})
export class StreamaudioPage {
  latestvideo = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    firebase.database().ref('latestvideo').on('value', snapshot => {
      this.latestvideo = snapshot.val().reverse();
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StreamaudioPage');
  }

}
