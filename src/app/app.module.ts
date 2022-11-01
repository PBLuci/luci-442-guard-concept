import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObjectifsComponent } from './objectifs/objectifs.component';
import { State1Component } from './state1/state1.component';
import { State2Component } from './state2/state2.component';
import { State3Component } from './state3/state3.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ObjectifsComponent,
    State1Component,
    State2Component,
    State3Component,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
