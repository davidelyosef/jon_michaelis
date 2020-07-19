import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @ViewChild ('sentMessageModal', {static :false}) sentMessageModal: ElementRef;

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

    console.log("sent");

    this.sentMessageModal.nativeElement.style.display= 'block';

    setTimeout(function(){
      window.location.replace("/home")},1000
    );
  
    const newContact = firebase.functions().httpsCallable("newContact");
    const result = newContact(this.contact);

  }

  public closeModal() {
    this.sentMessageModal.nativeElement.style.display = 'none';

    this.contact = {
      name: "",
      email: "",
      phone:"",
      subject:"",
      message:""
    }
  }

}