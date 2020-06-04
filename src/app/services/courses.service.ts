import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PaginationResult } from '../models/pagination';
import { environment } from 'src/environments/environment';
import { Course } from '../models/CourseAgg/course.model';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  baseUrl = environment.apiUrl + 'course/';
  constructor(private http: HttpClient) {}

  get(): Observable<Course[]> {
    return this.http.get<Course[]>(this.baseUrl);
  }

  getPaginated(page?, itemsPerPage?, search?): Observable<PaginationResult<Course[]>> {
    const paginatedResult: PaginationResult<Course[]> = new PaginationResult<
      Course[]
    >();
    let params = new HttpParams();
    if (page != null && itemsPerPage != null) {
      params = params.append('pageNumber', page);
      params = params.append('pageSize', itemsPerPage);
    }

    if (search != null) {
      params = params.append('searchName', search);
    }
    return this.http
        .get<Course[]>(this.baseUrl + 'GetByParams/', {
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

  getById(id): Observable<Course> {
    return this.http.get<Course>(this.baseUrl  + id);
  }

  create(model: Course): Observable<Course> {
    return this.http.post<Course>(this.baseUrl, model);
  }

  update(id, model): Observable<Course> {
    return this.http.put<Course>(this.baseUrl + id, model);
  }
}
