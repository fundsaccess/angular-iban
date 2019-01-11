import {AbstractControl, ValidationErrors} from '@angular/forms';
import * as IBAN from 'iban';

export class ValidatorService {

  constructor() { }

  static validateIban(c: AbstractControl): ValidationErrors {
    if (c.value && !IBAN.isValid(c.value)) {
      return {'iban': {value: c.value}};
    }

    return null;
  }
}
