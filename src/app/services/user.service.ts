import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PaginationResult } from '../models/pagination';
import { userType } from '../models/userType.enum';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl = environment.apiUrl + 'user/';

  constructor(private http: HttpClient) {}

  GetUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }

  getPaginatedUsers(
    page?,
    itemsPerPage?,
    search?
  ): Observable<PaginationResult<User[]>> {
    const paginatedResult: PaginationResult<User[]> = new PaginationResult<
      User[]
    >();
    let params = new HttpParams();
    if (page != null && itemsPerPage != null) {
      params = params.append('pageNumber', page);
      params = params.append('pageSize', itemsPerPage);
    }

    if (search != null && search !== '') {
      params = params.append('searchName', search);
    }
    return this.http
      .get<User[]>(this.baseUrl + 'GetUsersByParam/', {
        observe: 'response',
        params,
      })
      .pipe(
        map((response) => {
          paginatedResult.result = response.body;
          if (response.headers.get('Pagination') != null) {
            paginatedResult.pagination = JSON.parse(
              response.headers.get('Pagination')
            );
          }
          return paginatedResult;
        })
      );
  }

  getUsersByType(type): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + 'GetUsersByType/' + type);
  }

  GetUserById(id): Observable<User> {
    return this.http.get<User>(this.baseUrl + 'GetUserById/' + id);
  }

  updateUser(id, model): Observable<User> {
    return this.http.put<User>(this.baseUrl + id, model);
  }
}
