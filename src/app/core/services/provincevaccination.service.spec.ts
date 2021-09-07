import { TestBed } from '@angular/core/testing';

import { ProvincevaccinationService } from './provincevaccination.service';

describe('ProvincevaccinationService', () => {
  let service: ProvincevaccinationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProvincevaccinationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
