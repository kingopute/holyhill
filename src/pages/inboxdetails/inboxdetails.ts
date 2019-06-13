import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InboxdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inboxdetails',
  templateUrl: 'inboxdetails.html',
})
export class InboxdetailsPage {
  public item;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.get('item')


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InboxdetailsPage');
  }

}
