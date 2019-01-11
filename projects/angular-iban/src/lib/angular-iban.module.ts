import { NgModule } from '@angular/core';

import { IbanValidatorDirective } from './directives/iban-validator.directive';
import { IbanFormatterPipe } from './pipes/iban-formatter.pipe';

@NgModule({
  declarations: [
    IbanValidatorDirective,
    IbanFormatterPipe
  ],
  imports: [
  ],
  exports: [
    IbanValidatorDirective,
    IbanFormatterPipe,
  ]
})
export class AngularIbanModule { }
