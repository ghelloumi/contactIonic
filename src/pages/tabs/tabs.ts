import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {AddContactPage} from "../add-contact/add-contact";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AddContactPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
