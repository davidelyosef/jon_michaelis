import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { PaintingsComponent } from './paintings/paintings.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import * as firebase from 'firebase';

export const firebaseConfig = {
  apiKey: "AIzaSyBOk_gmQJi56dZWRtL7x5S-oTqvhOiYhrE",
  authDomain: "jonmichaelis-df88d.firebaseapp.com",
  databaseURL: "https://jonmichaelis-df88d.firebaseio.com",
  projectId: "jonmichaelis-df88d",
  storageBucket: "jonmichaelis-df88d.appspot.com",
  messagingSenderId: "681679918505",
  appId: "1:681679918505:web:fc9a0257ae17b6b950e0b8"
}
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    AboutComponent,
    PaintingsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule, 
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
