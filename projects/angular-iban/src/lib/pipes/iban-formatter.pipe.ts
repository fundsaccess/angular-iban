import { Pipe, PipeTransform } from '@angular/core';
import * as IBAN from 'iban';

@Pipe({
  name: 'ibanFormatter'
})
export class IbanFormatterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (IBAN.isValid(value)) {
      return IBAN.printFormat(value, ' ');
    }
    return value;
  }

}
