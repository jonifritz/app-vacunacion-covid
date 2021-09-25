import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

export interface VacunatoryCenterVaccination {
  id: number;
  nombre: string;
  vaccine_id: number;
  used_lots: number;
  locality_id: string;
  locality: any;
  received_lots: number;
}

export interface Vacunatories {
  id: number;
  nombre: string;
  
}


@Injectable({
  providedIn: 'root'
})
export class VacunatorycenterService {

  constructor(private httpClient: HttpClient) { }

  index(): Observable<VacunatoryCenterVaccination[]> {
    return this.httpClient.get<VacunatoryCenterVaccination[]>(`${environment.apiUri}/vacunatory-center-vaccination`);
    
  }
  
  create(body) {
    return this.httpClient.post(`${environment.apiUri}/vacunatory-center-vaccination`, body)
  }

  show(id): Observable<any[]> {
    return this.httpClient.get<any[]>(`${environment.apiUri}/vacunatory-center-vaccination/`+id);
  }



}
