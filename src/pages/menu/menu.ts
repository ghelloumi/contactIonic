import {Component, ViewChild} from '@angular/core';
import {IonicPage, Nav, NavController, Platform} from 'ionic-angular';
import {HomePage} from "../home/home";
import {AddContactPage} from "../add-contact/add-contact";
import {ContactPage} from "../contact/contact";
import {TabsPage} from "../tabs/tabs";

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  @ViewChild(Nav) nav: Nav;

  rootPage: any = TabsPage;
  activePage: any;

  homeMenuItems: Array<{title: string, component: any,icon: string}>;
  helpMenuItems: Array<{title: string, component: any,icon: string}>;


  constructor(public navCtrl: NavController, public platform: Platform) {


    this.homeMenuItems = [
      {title: 'Acceuil', component: HomePage, icon: 'home'},
      {title: 'Contact', component: ContactPage, icon: 'contacts'},
      {title: 'Ajouter Contact', component: AddContactPage, icon: 'add'}
    ];


    this.helpMenuItems = [
      {title: 'A propos', component: ContactPage, icon: 'ios-alert'}
    ];

    this.activePage = this.homeMenuItems[0];
  }




  openPage(page) {
    this.nav.setRoot(page.component);
    this.activePage = page;
  }

  checkActive(page) {
    return page == this.activePage;
  }

}
