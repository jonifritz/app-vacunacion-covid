import { TestBed } from '@angular/core/testing';

import { TypevaccineService } from './typevaccine.service';

describe('TypevaccineService', () => {
  let service: TypevaccineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypevaccineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
