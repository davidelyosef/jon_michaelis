import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public contact = {
    name: "",
    email: "",
    phone:"",
    subject:"",
    message:""
  };

  constructor() { }

  ngOnInit() {
  }

  public sendMessage():void{

    // console.log("hello")


    const newContact = firebase.functions().httpsCallable("newContact");

    const result = newContact(this.contact);
    // console.log(newContact);

  
  }
}
