import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import the FormsModule from the forms library, whre NgModel lives
import {FormsModule} from '@angular/forms'; 

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

// annotates the top-level AppModule class
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // import the FormsModule external module for the App
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
