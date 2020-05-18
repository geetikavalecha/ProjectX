import { TestBed } from '@angular/core/testing';

import { BasicMonteService } from './basic-monte.service';

describe('MonteServiceService', () => {
  let service: BasicMonteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicMonteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
