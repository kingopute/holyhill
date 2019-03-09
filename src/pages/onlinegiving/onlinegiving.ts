import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OfferingPage } from '../offering/offering';
import { TithePage } from '../tithe/tithe';
import { CharityPage } from '../charity/charity';
import { OthersPage } from '../others/others';
//import { ChikaPage } from '../chika/chika';
/**
 * Generated class for the OnlinegivingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-onlinegiving',
  templateUrl: 'onlinegiving.html',
})
export class OnlinegivingPage {
 filtermonthwise: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


navigateTo(page)
  {
     this.navCtrl.push(page);
  }


monthfilter() {
 //console.log(this.filtermonthwise);
 if (this.filtermonthwise == "1"){
       //alert('PIN  valid','Please provide a valid one.'); // just for browser
       //window.localStorage.setItem('new_pin', value.new_pin);
        //this.navigateTo('offering');
        this.navCtrl.push(OfferingPage);
    }

    else if (this.filtermonthwise == "2"){
        //this.navigateTo('tithe');
         this.navCtrl.push(TithePage);
      }

       else if (this.filtermonthwise == "3"){
       //this.navCtrl.push(BwariPage);
         this.navCtrl.push(CharityPage);
      }

       else if (this.filtermonthwise == "4"){
       //this.navCtrl.push(CentralPage);
         this.navCtrl.push(OthersPage);
      }
}


  ionViewDidLoad() {
    console.log('ionViewDidLoad OnlinegivingPage');
  }

}
