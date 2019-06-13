import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { SeriesPage } from '../series/series';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import{Platform}  from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-episode',
  templateUrl: 'episode.html',
})
export class EpisodePage {

  item = [];

  constructor(private theInAppBrowser: InAppBrowser, private platform: Platform, public navCtrl: NavController, public navParams: NavParams) {
    
    this.item = navParams.get('item')
  
  }

  launch(url){
    this.platform.ready().then(() =>{
      this.theInAppBrowser.create(url,"_self", "location=no");
  });
  }

  video() {
    this.navCtrl.push(SeriesPage);
  
  }


}
