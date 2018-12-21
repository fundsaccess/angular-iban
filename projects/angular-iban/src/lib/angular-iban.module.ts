import { NgModule } from '@angular/core';

import { IbanValidatorDirective } from './directives/iban-validator.directive';
import { IbanFormatterPipe } from './pipes/iban-formatter.pipe';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [IbanValidatorDirective, IbanFormatterPipe],
  imports: [
  ],
  exports: [
    IbanValidatorDirective,
    IbanFormatterPipe,
    FormsModule
  ]
})
export class AngularIbanModule { }
