import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
/**
 * Generated class for the StreamvideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name :'streamvideo'
})
@Component({
  selector: 'page-streamvideo',
  templateUrl: 'streamvideo.html',
})
export class StreamvideoPage {
  latestvideo = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    firebase.database().ref('latestvideo').on('value', snapshot => {
      this.latestvideo = snapshot.val().reverse();
    });


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StreamvideoPage');
  }

}
