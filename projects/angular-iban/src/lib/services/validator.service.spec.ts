import { TestBed } from '@angular/core/testing';
import { ValidatorService } from './validator.service';
import { FormControl } from '@angular/forms';

describe('ValidatorService', () => {
  let validatorService: ValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ValidatorService
      ]
    });

    validatorService = TestBed.inject(ValidatorService);
  });

  it('should be created', () => {
    expect(validatorService).toBeTruthy();
  });

  it('An IBAN OF DEUTSCHE KREDITBANK BERLIN should be valid', () => {
    expect(ValidatorService.validateIban(new FormControl('DE02120300000000202051'))).toBeNull();
  });

  it('An IBAN OF ING-DIBA should be valid', () => {
    expect(ValidatorService.validateIban(new FormControl('DE02500105170137075030'))).toBeNull();
  });

  it('An IBAN OF Postbank should be valid', () => {
    expect(ValidatorService.validateIban(new FormControl('DE02100100100006820101'))).toBeNull();
  });

  it('DE02120300000000202052 should be invalid', () => {
    expect(ValidatorService.validateIban(new FormControl('DE02120300000000202052'))).toBeTruthy();
  });

  it('DE0210010010000682010X should be invalid', () => {
    expect(ValidatorService.validateIban(new FormControl('DE0210010010000682010X'))).toBeTruthy();
  });
  
});
