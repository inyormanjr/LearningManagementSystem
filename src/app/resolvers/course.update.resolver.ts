import { Injectable } from '@angular/core';

import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertifyService } from '../services/alertify.service';
import { Course } from '../models/CourseAgg/course.model';
import { CoursesService } from '../services/courses.service';

@Injectable()
export class CourseUpdateResolver implements Resolve<Course> {
  constructor(
    private userService: CoursesService,
    private alertify: AlertifyService,
    private route: Router
  ) {}
  resolve(activatedRouteSnapshot: ActivatedRouteSnapshot): Observable<Course> {
     console.log(activatedRouteSnapshot.params.id);
     return this.userService.getById(activatedRouteSnapshot.params.id).pipe(
      catchError(() => {
        this.alertify.error('Problem retrieving data.');
        this.route.navigate(['/courses']);
        return of(null);
      })
    );
  }
}
