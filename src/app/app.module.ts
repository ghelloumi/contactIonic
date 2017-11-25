import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ContactServiceProvider } from '../providers/contact-service/contact-service';
import {ContactDetailsPage} from "../pages/contact-details/contact-details";
import {AddContactPage} from "../pages/add-contact/add-contact";
import {MenuPage} from "../pages/menu/menu";


@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    HomePage,
    ContactDetailsPage,
    TabsPage,
    AddContactPage,
    MenuPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    HomePage,
    ContactDetailsPage,
    TabsPage,
    AddContactPage,
    MenuPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ContactServiceProvider,
  ]
})
export class AppModule {}
