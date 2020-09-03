import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthState } from 'src/app/__reducers/auth.reducer';
import { Store } from '@ngrx/store';
import { logout } from 'src/app/actions/auth.actions';
import { AppActions, AuthActions } from 'src/app/actions/action-types';

@Component({
  selector: 'app-sb-top-nav',
  templateUrl: './sb-top-nav.component.html',
  styleUrls: ['./sb-top-nav.component.css'],
})
export class SbTopNavComponent implements OnInit {
  @Input() intialToggleState;
  @Output() isToggled = new EventEmitter();
  constructor(private router: Router, private store: Store<AuthState>) {}
  ngOnInit(): void {}

  toggle() {
     this.isToggled.emit(!this.intialToggleState);
  }
  logOut() {
    this.store.dispatch(AuthActions.logout());
  }
}
