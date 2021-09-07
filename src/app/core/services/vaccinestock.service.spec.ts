import { TestBed } from '@angular/core/testing';

import { VaccinestockService } from './vaccinestock.service';

describe('VaccinestockService', () => {
  let service: VaccinestockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VaccinestockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
