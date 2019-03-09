import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import{Platform}  from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-social',
  templateUrl: 'social.html',
})
export class SocialPage {

  subitem = []; 

  constructor(private theInAppBrowser: InAppBrowser, private platform: Platform,public navCtrl: NavController, public navParams: NavParams) {
  
    this.subitem = navParams.get('subitem')
  
  }

    launch(url){
  this.platform.ready().then(() =>{
    this.theInAppBrowser.create(url,"_self", "location=no");
});
}


}
