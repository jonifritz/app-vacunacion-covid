import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface VaccineStock {

  id: number;
  name_vaccine: string;
  quantity: number;
  admission_date: number;
}
@Injectable({
  providedIn: 'root'
})
export class VaccinestockService {

  constructor(private httpClient: HttpClient) {
   }

   index():Observable<VaccineStock[]> {
    return this.httpClient.get<VaccineStock[]>(`${environment.apiUri}/vaccine-stock`);
  }

  create(body){
    return this.httpClient.post(`${environment.apiUri}/vaccine-stock`, body)
  }
}
