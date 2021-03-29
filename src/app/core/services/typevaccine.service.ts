import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
export interface TypeVaccine {
  id: number;
  name: string;
  doses_number: number;
  country: string;
  laboratory: string
}
@Injectable({
  providedIn: 'root'
})
export class TypevaccineService {

  constructor(private httpClient: HttpClient) {
  }

  index():Observable<TypeVaccine[]> {
    return this.httpClient.get<TypeVaccine[]>(`${environment.apiUri}/type-vaccine`);
  }

  create(body) {
    return this.httpClient.post(`${environment.apiUri}/type-vaccine`, body)


  }
}
