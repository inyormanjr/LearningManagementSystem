import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import {JwtHelperService} from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.apiUrl + 'auth/';
  jwtHelper = new JwtHelperService();
decodedToken: any;
private currentUser: User;
  constructor(private http: HttpClient) { }

   login(model: any): Observable<User> {
      return this.http.post(this.baseUrl + 'login', model)
        .pipe(map((response: any) => {
          return response.user;
      }));
  }

  register(user: User) {
     return this.http.post(this.baseUrl + 'register', user);
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  getCurrentUser() {
    return this.currentUser;
  }
}
