import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface VaccineLots {

  id: number;
  vaccine_id: number;
  description: string;
  admission_date: number;
  quantity: number;
  used: number;

}

@Injectable({
  providedIn: 'root'
})

export class VaccineLotsService {

  constructor(private httpClient: HttpClient) {
  }

  index(): Observable<VaccineLots[]> {
    return this.httpClient.get<VaccineLots[]>(`${environment.apiUri}/vaccine-lots`);
  }

  create(body) {
    return this.httpClient.post(`${environment.apiUri}/vaccine-lots`, body)
  }

  show(id): Observable<VaccineLots[]> {
    return this.httpClient.get<VaccineLots[]>(`${environment.apiUri}/vaccine-lots/`+id);
  }
}