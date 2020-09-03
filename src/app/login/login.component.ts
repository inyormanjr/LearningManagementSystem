import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AlertifyService } from '../services/alertify.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounce, fadeIn} from 'ngx-animate';
import { AuthState } from '../__reducers/auth.reducer';
import { Store, select } from '@ngrx/store';
import { tap, map } from 'rxjs/operators';
import { noop, Observable } from 'rxjs';
import { AuthActions, AppActions } from '../actions/action-types';
import { AppState } from '../__reducers/appReducer';
import { isLoading } from '../__selectors/app.selector';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', ],
  animations: [
    trigger('fade-in', [transition('* => *', useAnimation(fadeIn, {
      params: {timing: 2, delay: 0}
    }))])
  ]
})
export class LoginComponent implements OnInit {

  loginModel: any = {};
  loginForm: FormGroup;
  loading$: Observable<boolean>;

  constructor(private fb: FormBuilder, private alertify: AlertifyService,
              private authService: AuthService, private router: Router,
              private appStore: Store<AppState>,
              private store: Store<AuthState>
  ) {

  }


  createForm() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }


  ngOnInit(): void {
    this.createForm();
    this.loading$ = this.appStore.pipe(select(isLoading));
  }

  login() {
      this.loginModel = this.loginForm.value;
      this.appStore.dispatch(AppActions.loading({ isLoading: true }));
      this.authService.login(this.loginModel).pipe(tap(user => {
      this.appStore.dispatch(AppActions.loading({ isLoading: false }));
      this.loginModel = {};
      this.store.dispatch(AuthActions.login({ user }));
      this.router.navigate(['/home']);
      })).subscribe(noop, error => {
      this.appStore.dispatch(AppActions.loading({ isLoading: false }));
      this.alertify.error(error);
     });
   }

}
