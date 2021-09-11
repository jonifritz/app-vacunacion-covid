import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface User {
  id: number;
  name: number;
  email: string;
  password?: string;
  role: Role;
}

export interface Role {
  id: number;
  name: string; 
}

export interface Session{
  token: String;
  user: User;
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  //private api_login = `${environment.apiUri}/auth/login`;

  constructor(private httpClient: HttpClient) { 
  }

  login(user) {
    return this.httpClient.post(`${environment.apiUri}/login`, user)
  }

  register(user) {
    return this.httpClient.post(`${environment.apiUri}/register`, user)
  }

  logout(user){
    return this.httpClient.post(`${environment.apiUri}/logout`, user)
  }

}
