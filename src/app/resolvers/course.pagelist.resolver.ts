import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Course } from '../models/CourseAgg/course.model';
import { CoursesService } from '../services/courses.service';
import { AlertifyService } from '../services/alertify.service';
import { PaginationResult } from '../models/pagination';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class CoursePageListResolver
  implements Resolve<PaginationResult<Course[]>> {
  constructor(
    private courseService: CoursesService,
    private alertify: AlertifyService,
    private route: Router
  ) {}
  resolve(
    activatedRouteSnapshot: ActivatedRouteSnapshot
  ): Observable<PaginationResult<Course[]>> {
    return this.courseService.getPaginated().pipe(
      catchError(() => {
        this.alertify.error('Problem retrieving data.');
        this.route.navigate(['/accounts']);

        return of(null);
      })
    );
  }
}
