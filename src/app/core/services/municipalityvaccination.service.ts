import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

export interface MunicipalityVaccination {
  nombre: string;
  received_vaccines: string;
  assigned_vaccines: string;
  discarded_vaccines: string;
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

}
