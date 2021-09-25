import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

export interface User {
  id: number;
  name: number;
  email: string;
  password?: string;
  role: Role;
  region_id: string;
  locality_id: string;
}

export interface Role {
  id: number;
  name: string;
  code: string;
}

export interface Session {
  token: String;
  user: User;
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<{
    user: User;
    access_token: string;
  }>;

  currentUser: Observable<{
    user: User;
    access_token: string;
  }>;

  constructor(private httpClient: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<{
      user: User;
      access_token: string;
    }>({
      user: JSON.parse(localStorage.getItem('user')),
      access_token: JSON.parse(localStorage.getItem('token')),
    });
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentTokenValue(): string {
    return this.currentUserSubject.value?.access_token;
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value.user;
  }

  login(user) {

    return this.httpClient.post(`${environment.authUri}/login`, user).pipe(tap((response: { token: string, user: any }) => {
      localStorage.setItem('user', JSON.stringify(response.user));
      localStorage.setItem('token', JSON.stringify(response.token));
      this.currentUserSubject.next({ user: response.user, access_token: response.token });
    }));
  }

  register(user) {
    return this.httpClient.post(`${environment.apiUri}/register`, user)
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login']);
  }

  index():Observable<User[]> {
    return this.httpClient.get<User[]>(`${environment.apiUri}/users`);
  }

  edit(id,body){
    return this.httpClient.put(`${environment.apiUri}/update/`+id, body);
  }

  delete(id){
    return this.httpClient.delete(`${environment.apiUri}/destroy/`+id);
  }
}
