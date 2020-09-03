import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthState } from 'src/app/__reducers/auth.reducer';
import { AuthActions } from 'src/app/actions/action-types';
import { AppState } from 'src/app/__reducers/appReducer';
import { login } from 'src/app/actions/auth.actions';

@Component({
  selector: 'app-lms-main-sb',
  templateUrl: './lms-main-sb.component.html',
  styleUrls: ['./lms-main-sb.component.css'],
})
export class LmsMainSbComponent implements OnInit {
  isLoading = false;
  showSideBar = false;
  constructor(private router: Router, private store: Store<AppState>) {
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.isLoading = true;
      }

      if (event instanceof NavigationEnd) {
        this.isLoading = false;
      }

      if (event instanceof NavigationError) {
        this.isLoading = false;

        // Present error to user
        console.log(event.error);
      }
    });
  }
  event(event) {
    this.showSideBar = event;
    console.log(this.showSideBar);
  }
  ngOnInit(): void {

  }
}
