import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OnetimetithePage } from './../onetimetithe/onetimetithe';
import { ReoccurringtithePage } from './../reoccurringtithe/reoccurringtithe';
/**
 * Generated class for the TithePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name :'tithe'
})
@Component({
  selector: 'page-tithe',
  templateUrl: 'tithe.html',
})
export class TithePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TithePage');
  }

    onetime() {
    this.navCtrl.push(OnetimetithePage);
  }

   reoccurring() {
    this.navCtrl.push(ReoccurringtithePage);
  }

}
