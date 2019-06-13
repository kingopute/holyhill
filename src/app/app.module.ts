import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { Calendar } from '@ionic-native/calendar';
//import { Component, ViewChild } from '@angular/core';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';


//import { NgModule, ErrorHandler } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
//import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
//import { MyApp } from './app.component';
import { VideosPipe } from './../pipes/videos/videos';
//import { HttpModule } from '@angular/http';
//import { InAppBrowser } from '@ionic-native/in-app-browser';
//import { Calendar } from '@ionic-native/calendar';
import { SocialSharing } from '@ionic-native/social-sharing';


import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonicStorageModule } from '@ionic/storage';

import { ConferenceApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { PopoverPage } from '../pages/about-popover/about-popover';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { MapPage } from '../pages/map/map';
import { SchedulePage } from '../pages/schedule/schedule';
import { ScheduleFilterPage } from '../pages/schedule-filter/schedule-filter';
import { SessionDetailPage } from '../pages/session-detail/session-detail';
import { SignupPage } from '../pages/signup/signup';
import { SpeakerDetailPage } from '../pages/speaker-detail/speaker-detail';
import { SpeakerListPage } from '../pages/speaker-list/speaker-list';
import { TabsPage } from '../pages/tabs-page/tabs-page';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { SupportPage } from '../pages/support/support';
import { AgmCoreModule } from 'angular2-google-map/core';


import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';
import { SermonsPage } from '../pages/sermons/sermons';
import { SeriesPage } from '../pages/series/series';
import { EpisodePage } from '../pages/episode/episode';
import { EventsPage } from '../pages/events/events';
import { EventDetailsPage } from '../pages/event-details/event-details';
import { BiblePage } from '../pages/bible/bible';
import { NewsPage } from '../pages/news/news';

import { NewsArticlePage } from '../pages/news-article/news-article';
import { LeadersPage } from '../pages/leaders/leaders';
import { MorePage } from '../pages/more/more';
import { BranchesPage } from '../pages/branches/branches';
import { AboutUsPage } from '../pages/about-us/about-us';

import { SocialPage } from '../pages/social/social';
import { MusicPage } from '../pages/music/music';
import { TithingPage } from '../pages/tithing/tithing';
import { ConnectPage } from '../pages/connect/connect';
import { MinistriesPage } from '../pages/ministries/ministries';
import { MinistryDetailsPage } from '../pages/ministry-details/ministry-details';
import { LocationMapPage } from '../pages/location-map/location-map';

import { WelcomePage } from '../pages/welcome/welcome';
import { OnlinegivingPage } from './../pages/onlinegiving/onlinegiving';

import { DevotionPage } from './../pages/devotion/devotion';
import { DevotionalPage } from './../pages/devotional/devotional';
import { DevotionaldetailsPage } from './../pages/devotionaldetails/devotionaldetails';

import { WeeklydeclarationPage } from './../pages/weeklydeclaration/weeklydeclaration';
import { WeeklydeclarationdetailsPage } from './../pages/weeklydeclarationdetails/weeklydeclarationdetails';



import { OfferingPage } from './../pages/offering/offering';
import { OnetimeofferingPage } from './../pages/onetimeoffering/onetimeoffering';
import { ReoccurringofferingPage } from './../pages/reoccurringoffering/reoccurringoffering';

import { TithePage } from './../pages/tithe/tithe';
import { OnetimetithePage } from './../pages/onetimetithe/onetimetithe';
import { ReoccurringtithePage } from './../pages/reoccurringtithe/reoccurringtithe';

import { CharityPage } from './../pages/charity/charity';
import { OnetimecharityPage } from './../pages/onetimecharity/onetimecharity';
import { ReoccurringcharityPage } from './../pages/reoccurringcharity/reoccurringcharity';

import { OthersPage } from './../pages/others/others';
import { OnetimeothersPage } from './../pages/onetimeothers/onetimeothers';
import { ReoccurringothersPage } from './../pages/reoccurringothers/reoccurringothers';

import { StreamaudioPage } from './../pages/streamaudio/streamaudio';
import { StreamvideoPage } from './../pages/streamvideo/streamvideo';

import { InboxPage } from './../pages/inbox/inbox';
import { InboxdetailsPage } from './../pages/inboxdetails/inboxdetails';

import { ThanksgivingPage } from './../pages/thanksgiving/thanksgiving';











@NgModule({
  declarations: [
    ConferenceApp,
    AboutPage,
    AccountPage,
    LoginPage,
    MapPage,
    PopoverPage,
    SchedulePage,
    ScheduleFilterPage,
    SessionDetailPage,
    SignupPage,
    SpeakerDetailPage,
    SpeakerListPage,
    TabsPage,
    SermonsPage,
   SeriesPage,
   EpisodePage,
    TutorialPage,
    EventsPage,
    VideosPipe,
    EventDetailsPage,
    BiblePage,
    NewsPage,
    NewsArticlePage,
    LeadersPage,
    MorePage,
    AboutUsPage,
    BranchesPage,
    LeadersPage,
    MinistriesPage,
    ConnectPage,
    ConnectPage,
    TithingPage,
    MusicPage,
    SocialPage,
    MinistryDetailsPage,
    LocationMapPage,
    SupportPage,
    WelcomePage,
    OnlinegivingPage,
    DevotionPage,
DevotionalPage,
DevotionaldetailsPage,
WeeklydeclarationPage,
WeeklydeclarationdetailsPage,
OfferingPage,
OnetimeofferingPage,
ReoccurringofferingPage,
TithePage,
OnetimetithePage,
ReoccurringtithePage,
CharityPage,
OnetimecharityPage,
ReoccurringcharityPage,
OthersPage,
OnetimeothersPage,
ReoccurringothersPage,
StreamaudioPage,
StreamvideoPage,
InboxPage,
InboxdetailsPage,
ThanksgivingPage
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDMgyfWT7Ur55veBZKf-QZyvWEiFh8USGs'
    }),
    IonicModule.forRoot(ConferenceApp, {}, {
      links: [
        { component: TabsPage, name: 'TabsPage', segment: 'tabs-page' },
        { component: WelcomePage, name: 'Welcome', segment: 'welcome' },
        { component: OnlinegivingPage, name: 'Onlinegiving', segment: 'onlinegiving' },
        { component: InboxPage, name: 'InboxPage', segment: 'inbox' },
        { component: DevotionPage, name: 'Devotion', segment: 'devotion' },
        { component: WeeklydeclarationPage, name: 'Weeklydeclaration', segment: 'Weeklydeclaration' },
        { component: SpeakerDetailPage, name: 'SpeakerDetail', segment: 'speakerDetail/:speakerId' },
        { component: MapPage, name: 'Map', segment: 'map' },
        { component: AboutPage, name: 'About', segment: 'about' },
        { component: TutorialPage, name: 'Tutorial', segment: 'tutorial' },
        { component: SupportPage, name: 'SupportPage', segment: 'support' },
        { component: LoginPage, name: 'LoginPage', segment: 'login' },
        { component: AccountPage, name: 'AccountPage', segment: 'account' },
        { component: SermonsPage, name: 'SermonsPage', segment: 'sermons' },
        { component: SeriesPage, name: 'SeriesPage', segment: 'series' },
        { component: EpisodePage, name: 'EpisodePage', segment: 'episode' },
        { component: EventsPage, name: 'EventsPage', segment: 'events' },
        { component: EventDetailsPage, name: 'EventDetailsPage', segment: 'eventdetails' },
        { component: BiblePage, name: 'BiblePage', segment: 'bible' },
        { component: NewsPage, name: 'NewsPage', segment: 'news' },
        { component: NewsArticlePage, name: 'NewsArticlePage', segment: 'newsarticle' },
        { component: LeadersPage, name: 'LeadersPage', segment: 'leaders' },
        { component: MorePage, name: 'MorePage', segment: 'more' },
        { component: AboutUsPage, name: 'AboutUsPage', segment: 'aboutus' },
        { component: BranchesPage, name: 'BranchesPage', segment: 'branches' },
        { component: MinistriesPage, name: 'MinistriesPage', segment: 'ministries' },
        { component: ConnectPage, name: 'ConnectPage', segment: 'connect' },
        { component: MusicPage, name: 'MusicPage', segment: 'music' },
        { component: SocialPage, name: 'SocialPage', segment: 'social' },
        { component: MinistryDetailsPage, name: 'MinistryDetailsPage,', segment: 'ministrydetails' },
        
        
        
        
        { component: SignupPage, name: 'SignupPage', segment: 'signup' }
        
      ]
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ConferenceApp,
    AboutPage,
    AccountPage,
    LoginPage,
    MapPage,
    PopoverPage,
    SchedulePage,
    ScheduleFilterPage,
    SessionDetailPage,
    SignupPage,
    SpeakerDetailPage,
    SpeakerListPage,
    TabsPage,
    TutorialPage,
    SermonsPage,
   SeriesPage,
  EpisodePage,
  EventsPage,
  EventDetailsPage,
  BiblePage,
   NewsArticlePage,
   NewsPage,
   MorePage,
    AboutUsPage,
    BranchesPage,
    LeadersPage,
    MinistriesPage,
    ConnectPage,
    TithingPage,
    MusicPage,
    SocialPage,
    NewsArticlePage,
    MinistryDetailsPage,
    LocationMapPage,
    SupportPage,
    WelcomePage,
    OnlinegivingPage,
    DevotionPage,
DevotionalPage,
DevotionaldetailsPage,
WeeklydeclarationPage,
WeeklydeclarationdetailsPage,
OfferingPage,
OnetimeofferingPage,
ReoccurringofferingPage,
TithePage,
OnetimetithePage,
ReoccurringtithePage,
CharityPage,
OnetimecharityPage,
ReoccurringcharityPage,
OthersPage,
OnetimeothersPage,
ReoccurringothersPage,
StreamaudioPage,
StreamvideoPage,
InboxPage,
InboxdetailsPage,
ThanksgivingPage

  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ConferenceData,
    UserData,
    InAppBrowser,
    Calendar,
    SocialSharing,
    SplashScreen,
    
  ]
})
export class AppModule { }
