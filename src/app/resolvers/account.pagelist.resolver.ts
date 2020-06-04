import { Injectable } from '@angular/core';

import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { AlertifyService } from '../services/alertify.service';
import { PaginationResult } from '../models/pagination';



@Injectable()
export class AccountPageListResolver implements Resolve<PaginationResult<User[]>> {
    constructor(private userService: UserService, private alertify: AlertifyService, private route: Router) {}
    resolve(route: ActivatedRouteSnapshot): Observable<PaginationResult<User[]>> {
        return this.userService.getPaginatedUsers().pipe(
            catchError(() => {
                this.alertify.error('Problem retrieving data.');
                this.route.navigate(['/dashboard']);
                return of(null);
            })
        );
    }
}
