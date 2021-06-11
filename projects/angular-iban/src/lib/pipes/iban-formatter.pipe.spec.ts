import { IbanFormatterPipe } from './iban-formatter.pipe';

describe('IbanFormatterPipe', () => {
  const ibanFormatterPipe = new IbanFormatterPipe();

  it('create an instance', () => {
    expect(ibanFormatterPipe).toBeTruthy();
  });

  const iban1 = 'DE12500105170648489890';
  const iban1Formatted = 'DE12 5001 0517 0648 4898 90';

  it(`should format ${iban1} to ${iban1Formatted}`, () => {
    expect(ibanFormatterPipe.transform(iban1)).toBe(iban1Formatted);
  });


  const iban2 = 'DE02100100100006820101';
  const iban2Formatted = 'DE02 1001 0010 0006 8201 01';

  it(`should format ${iban2} to ${iban2Formatted}`, () => {
    expect(ibanFormatterPipe.transform(iban2)).toBe(iban2Formatted);
  });

  const iban3 = 'DE021';

  it(`shouldn't format the invalid IBAN ${iban3}`, () => {
    expect(ibanFormatterPipe.transform(iban3)).toBe(iban3);
  });

});
