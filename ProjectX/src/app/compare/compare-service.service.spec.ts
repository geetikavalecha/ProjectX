import { TestBed } from '@angular/core/testing';

import { CompareServiceService } from './compare-service.service';

describe('CompareServiceService', () => {
  let service: CompareServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompareServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
