import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

export interface MunicipalityVaccination {
  vaccine_id: number,
  used_lots: number,
  nombre: string;
  vaccine_name: any;
  iso_id: string,
  province_id: string,
  receive_lots: number,
  used: number,
}

@Injectable({
  providedIn: 'root'
})
export class MunicipalityvaccinationService {

  private municipality_api = `https://apis.datos.gob.ar/georef/api/municipios?campos=id,nombre&max=2800&provincia=`;

  private province=null;

  constructor(private httpClient: HttpClient) {
  }

  index(): Observable<MunicipalityVaccination[]> {
   //https://apis.datos.gob.ar/georef/api/municipios?provincia=70
   //https://apis.datos.gob.ar/georef/api/municipios?campos=id,nombre&provincia=70
   //https://apis.datos.gob.ar/georef/api/municipios?campos=id,nombre&provincia=06&max=2800
    return this.httpClient.get<MunicipalityVaccination[]>(`${environment.apiUri}/municipality-vaccination`);
    
  }
  
  getMunicipalitiesFromApi(id): Observable<MunicipalityVaccination[]>{
    return this.httpClient.get<String[]>(this.municipality_api+id).pipe(map(res => res['municipios']));
  }


  create(body) {
    return this.httpClient.post(`${environment.apiUri}/municipality-vaccination`, body)
  }


  show(id): Observable<any> {
    return this.httpClient.get<any>(`${environment.apiUri}/municipality-vaccination/`+id);
  }

  showMunicipalitiesVaccines(): Observable<MunicipalityVaccination[]>{
    return this.httpClient.get<MunicipalityVaccination[]>(`${environment.apiUri}/municipality-vaccination/my-vaccines`);
  }

  showStats(vaccine_id): Observable<MunicipalityVaccination> {
    return this.httpClient.get<MunicipalityVaccination>(`${environment.apiUri}/municipality-vaccination/stats/`+vaccine_id).pipe(map(res => res));
  }

  showAllStats(): Observable<MunicipalityVaccination> {
    return this.httpClient.get<MunicipalityVaccination>(`${environment.apiUri}/municipality-vaccination/statsall`).pipe(map(res => res));
  }

  allTypesVaccinesMunicipalities(): Observable<MunicipalityVaccination> {
    return this.httpClient.get<MunicipalityVaccination>(`${environment.apiUri}/municipality-vaccination/alltypesVaccinesMunicipalities/`).pipe(map(res => res));
  }

}
