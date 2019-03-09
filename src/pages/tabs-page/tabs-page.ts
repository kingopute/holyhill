import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { MapPage } from '../map/map';
import { SermonsPage } from '../sermons/sermons';
import { WelcomePage } from '../welcome/welcome';
import { DevotionPage } from '../devotion/devotion';
import { MorePage } from '../more/more';
import { OnlinegivingPage } from '../onlinegiving/onlinegiving';

@Component({
  templateUrl: 'tabs-page.html'
})
export class TabsPage {
  // set the root pages for each tab
  tab1Root: any = WelcomePage;
  tab2Root: any = SermonsPage;
  tab3Root: any = OnlinegivingPage;
  tab4Root: any = DevotionPage;
  tab5Root: any = MorePage;
  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

}
