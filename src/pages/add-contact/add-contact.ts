import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ContactServiceProvider} from "../../providers/contact-service/contact-service";
import {ContactPage} from "../contact/contact";

/**
 * Generated class for the AddContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-contact',
  templateUrl: 'add-contact.html',
})
export class AddContactPage {
  public mode;
  AddModifyBt = '';

  registerCredentials = {
    nom: '',
    prenom: '',
    dateNaissance: '',
    email: '',
    tel: '',
    photoUrl: ''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,public contactServices:ContactServiceProvider) {
    this.mode = navParams.get("mode");

    if(this.mode == "1"){
      this.AddModifyBt = "Modifier"
      this.registerCredentials=navParams.get("contact");
      console.log(this.registerCredentials)
    }else this.AddModifyBt = "Ajouter"
  }


  addContact(){
    if(this.mode == "1"){

      this.contactServices.modifyContact(this.registerCredentials).subscribe(data => console.log(data));
      this.navCtrl.push(ContactPage);
    }else{
      let a={
        "nom": "Ghassen",
        "prenom": "Elloumi",
        "dateNaissance": "1994-05-29",
        "email": "ell.ghassen@gmail.com",
        "tel": "55377640",
        "photoUrl": "fghrt",
      };

      this.contactServices.addContact(this.registerCredentials).subscribe();
      this.navCtrl.push(ContactPage);

    }

  }

}
