import { TestBed } from '@angular/core/testing';

import { MunicipalityvaccinationService } from './municipalityvaccination.service';

describe('MunicipalityvaccinationService', () => {
  let service: MunicipalityvaccinationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MunicipalityvaccinationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
