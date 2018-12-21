import { Directive } from '@angular/core';
import {NG_VALIDATORS, Validator, AbstractControl, ValidationErrors} from '@angular/forms';
import * as IBAN from 'iban';

@Directive({
  selector: '[ibanValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: IbanValidatorDirective, multi: true}]
})
export class IbanValidatorDirective implements Validator {
  validate(c: AbstractControl): { [key: string]: any; } {
    return IbanValidatorDirective.validateIban(c);
  }

  static validateIban(c: AbstractControl): ValidationErrors {
    if (c.value && !IBAN.isValid(c.value)) {
      return {'iban': {value: c.value}}
    }

    return null;
  }
}

