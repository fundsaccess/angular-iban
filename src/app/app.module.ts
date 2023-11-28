import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularIbanModule } from 'projects/angular-iban/src/lib/angular-iban.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularIbanModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
