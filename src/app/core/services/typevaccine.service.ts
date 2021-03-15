import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TypevaccineService {

  constructor(private httpClient:HttpClient) {
  }

  index() {
    return this.httpClient.get(`${environment.apiUri}/type-vaccine`);
  }

  create() {


  }
}
