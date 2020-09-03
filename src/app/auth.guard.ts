import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { AlertifyService } from './services/alertify.service';
import { Store, select } from '@ngrx/store';
import { AppState } from './__reducers/appReducer';
import { Observable } from 'rxjs';
import { isLoggedIn } from './__selectors/auth.selector';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,
              private alertify: AlertifyService,
              private store: Store<AppState>,
              private router: Router) { }
  canActivate(): Observable<boolean> {
    return this.store.pipe(select(isLoggedIn),
      tap(loggedIn => {
        if (!loggedIn) {
          this.alertify.error('You are not logged-in');
          this.router.navigateByUrl('/login');
          }
    }));
  }
}
