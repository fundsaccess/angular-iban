import { IbanFormatterPipe } from './iban-formatter.pipe';

describe('IbanFormatterPipe', () => {
  it('create an instance', () => {
    const pipe = new IbanFormatterPipe();
    expect(pipe).toBeTruthy();
  });
});
