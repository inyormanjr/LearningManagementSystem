import { Injectable } from '@angular/core';

import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { AlertifyService } from '../services/alertify.service';



@Injectable()
export class AccountUpdateResolver implements Resolve<User> {
    constructor(private userService: UserService, private alertify: AlertifyService, private route: Router) {}
    resolve(activatedRouteSnapshot: ActivatedRouteSnapshot): Observable<User> {
        return this.userService.GetUserById(activatedRouteSnapshot.params.id).pipe(
            catchError(() => {
                this.alertify.error('Problem retrieving data.');
                this.route.navigate(['/accounts']);
                return of(null);
            })
        );
    }
}
