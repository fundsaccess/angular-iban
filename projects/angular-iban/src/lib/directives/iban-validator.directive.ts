import { Directive } from '@angular/core';
import {NG_VALIDATORS, Validator, AbstractControl} from '@angular/forms';
import {ValidatorService} from '../services/validator.service';

@Directive({
  selector: '[ibanValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: IbanValidatorDirective, multi: true}]
})
export class IbanValidatorDirective implements Validator {
  validate(c: AbstractControl): { [key: string]: any } {
    return ValidatorService.validateIban(c);
  }
}
