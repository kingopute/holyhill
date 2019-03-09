import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { OnetimecharityPage } from './../onetimecharity/onetimecharity';
import { ReoccurringcharityPage } from './../reoccurringcharity/reoccurringcharity';
/**
 * Generated class for the CharityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-charity',
  templateUrl: 'charity.html',
})
export class CharityPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CharityPage');
  }

    onetime() {
    this.navCtrl.push(OnetimecharityPage);
  }

   reoccurring() {
    this.navCtrl.push(ReoccurringcharityPage);
  }

}
