import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

export interface ProvinceVaccination {
  nombre: string;
  received_vaccines: string;
  assigned_vaccines: string;
  discarded_vaccines: string;

}

@Injectable({
  providedIn: 'root'
})

export class ProvincevaccinationService {

  private province_api = `https://apis.datos.gob.ar/georef/api/provincias`;
  private provinces=null;

  constructor(private httpClient: HttpClient) {
  }

  index(): Observable<ProvinceVaccination[]> {
    /*return this.httpClient.get<ProvinceVaccination[]>(this.province_api).pipe(map(res => res['provincias']));*/
    return this.httpClient.get<ProvinceVaccination[]>(`${environment.apiUri}/province-vaccination`);
    
  }
  
  getProvinciesFromApi(): Observable<ProvinceVaccination[]>{
    return this.httpClient.get<String[]>(this.province_api).pipe(map(res => res['provincias']));
  }


  create(body) {
    return this.httpClient.post(`${environment.apiUri}/province-vaccination`, body)
  }

  show(id): Observable<ProvinceVaccination[]> {
    return this.httpClient.get<ProvinceVaccination[]>(`${environment.apiUri}/province-vaccination/`+id);
  }

}
