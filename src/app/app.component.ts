import { Component, OnInit } from '@angular/core';
import { AppState } from './__reducers/appReducer';
import { Store } from '@ngrx/store';
import { login } from './actions/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ClientApp';

  constructor(private store: Store<AppState> ) {}
  ngOnInit() {
       const userProfile = localStorage.getItem('user');
       if (userProfile) {
         this.store.dispatch(login({ user: JSON.parse(userProfile) }));
       }
    }
}
