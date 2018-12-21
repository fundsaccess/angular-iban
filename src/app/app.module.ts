import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularIbanModule } from 'projects/angular-iban/src/lib/angular-iban.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularIbanModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
