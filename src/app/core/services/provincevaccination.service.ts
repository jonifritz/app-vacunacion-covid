import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

export interface ProvinceVaccination {
  id: number;
  vaccine_id: number;
  used_lots: number;
  nombre: string;
  vaccine_name: any;
  iso_id: number;
  received_lots: number;
  used: number; 

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

  show(id): Observable<ProvinceVaccination> {
    return this.httpClient.get<ProvinceVaccination>(`${environment.apiUri}/province-vaccination/`+id);
  }

  showProvinceVaccines(): Observable<ProvinceVaccination[]>{
    return this.httpClient.get<ProvinceVaccination[]>(`${environment.apiUri}/province-vaccination/my-vaccines`);
  }

  showStats(vaccine_id): Observable<ProvinceVaccination> {
    return this.httpClient.get<ProvinceVaccination>(`${environment.apiUri}/province-vaccination/stats/`+vaccine_id).pipe(map(res => res));
  }

  showAllStats(): Observable<ProvinceVaccination> {
    return this.httpClient.get<ProvinceVaccination>(`${environment.apiUri}/province-vaccination/statsall`).pipe(map(res => res));
  }

  statsPerProvince(vaccine_id): Observable<ProvinceVaccination> {
    return this.httpClient.get<ProvinceVaccination>(`${environment.apiUri}/province-vaccination/typeVaccineByProvinces/`+vaccine_id).pipe(map(res => res));
  }

  typesVaccinesByProvinceStats(iso_id): Observable<ProvinceVaccination> {
    return this.httpClient.get<ProvinceVaccination>(`${environment.apiUri}/province-vaccination/typesVaccinesByProvince/`+iso_id).pipe(map(res => res));
  }

  //lo usa PIE CHART
  allTypesVaccinesProvinces(): Observable<ProvinceVaccination> {
    return this.httpClient.get<ProvinceVaccination>(`${environment.apiUri}/province-vaccination/alltypesVaccinesProvinces/`).pipe(map(res => res));
  }
}
