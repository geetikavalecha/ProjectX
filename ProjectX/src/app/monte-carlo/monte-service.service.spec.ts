import { TestBed } from '@angular/core/testing';

import { MonteServiceService } from './monte-service.service';

describe('MonteServiceService', () => {
  let service: MonteServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonteServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
