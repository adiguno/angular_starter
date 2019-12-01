import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import the FormsModule from the forms library, whre NgModel lives
import {FormsModule} from '@angular/forms'; 

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';

// annotates the top-level AppModule class
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule // import the FormsModule external module for the App
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
