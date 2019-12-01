import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularIbanModule } from 'projects/angular-iban/src/lib/angular-iban.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularIbanModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/angular-iban'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
