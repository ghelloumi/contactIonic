import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ContactServiceProvider} from "../../providers/contact-service/contact-service";
import {ContactDetailsPage} from "../contact-details/contact-details";
import {AddContactPage} from "../add-contact/add-contact";
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  contacts: any;

  constructor(public contactService: ContactServiceProvider,
              public nav: NavController,
              public alertCtrl: AlertController) {
  }

  searchTerm: string = '';


  searchContacts() {
    this.contactService.getContacts()
      .subscribe(
        data => {
          this.contacts = data;
          this.contacts = this.contacts.filter((item) => {
            return item.prenom.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
          });
        }
      )
  }

  ionViewWillEnter() {
    console.log('aa')
    this.contactService.getContacts()
      .subscribe(
        data => {
          this.contacts = data;
        }
      )
  }

  getDetails(contact) {
    this.nav.push(ContactDetailsPage, contact);
  }

  deleteContact(id) {
    var name = this.contacts.filter((item) => {
      return item.id == id;
    })[0].nom;

    let alert = this.alertCtrl.create({
      title: 'Supprimer le contact!',
      subTitle: 'Voulez vous supprimer "'+name+'" de la liste des contacts!',
      buttons: [
        {
          text: 'NON',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'OUI',
          handler: data => {
            this.contactService.deleteContact(id).subscribe(res =>
              this.contactService.getContacts()
                .subscribe(
                  data => {
                    this.contacts = data;
                    console.log()
                  }
                ));
          }
        }
      ]
    });



    alert.present();


  }

  modifyContact(contact) {
    this.nav.push(AddContactPage,{
      contact:contact,
      mode: 1
    });
  }

}
