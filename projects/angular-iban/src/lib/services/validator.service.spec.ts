import { TestBed } from '@angular/core/testing';
import { ValidatorService } from './validator.service';

describe('ValidatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ValidatorService
    ]
  }));
  it('should be created', () => {
    const service: ValidatorService = TestBed.inject(ValidatorService);
    expect(service).toBeTruthy();
  });
});
