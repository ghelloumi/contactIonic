import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Headers} from '@angular/http';

@Injectable()
export class ContactServiceProvider {
  ApiUrl:string="http://localhost:8080/";
  constructor(public http: HttpClient) {
  }
 getContacts()
 {
   return this.http.get(this.ApiUrl+"contacts");
 }

 addContact(contact){
    return this.http.post(this.ApiUrl+"contacts/",contact);
 }

 deleteContact(id){
   return this.http.delete(this.ApiUrl+"contacts/"+id);
 }

 modifyContact(contact){
   return this.http.put(this.ApiUrl+"contacts/"+contact.id,contact);
 }


}
