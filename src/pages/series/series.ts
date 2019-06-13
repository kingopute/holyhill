import { EpisodePage } from '../episode/episode';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { Http } from '@angular/http';
// import 'rxjs/Rx';
// import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-series',
  templateUrl: 'series.html',
})
export class SeriesPage {

  subitem = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.subitem = navParams.get('subitem')

    // firebase.database().ref('sermons/episode').on('value', snapshot => {
    //   this.episode = snapshot.val();
    // });
  }

  episodes($event, subitem) {
    this.navCtrl.push(EpisodePage, {subitem: subitem});
  }

}
