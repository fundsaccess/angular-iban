import { Pipe, PipeTransform } from "@angular/core";
import { iban as IBAN } from "@rivo-gg/geld";

@Pipe({
  name: "ibanFormatter",
  standalone: false,
})
export class IbanFormatterPipe implements PipeTransform {
  transform(value: string, clean: boolean = true, args?: any): string {
    if (IBAN.isValid(value, clean)) {
      return IBAN.printFormat(value, " ");
    }
    return value;
  }
}
