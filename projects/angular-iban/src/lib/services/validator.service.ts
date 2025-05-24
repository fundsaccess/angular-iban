import { AbstractControl, ValidationErrors } from '@angular/forms';
import { iban as IBAN } from "@rivo-gg/geld";

export class ValidatorService {
  static validateIban(c: AbstractControl, clean: boolean = true): ValidationErrors {
    if (c.value && !IBAN.isValid(c.value, clean)) {
      return { iban: { value: c.value } };
    }

    return null as any;
  }
}
