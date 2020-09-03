import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ErrorInterceptorProvider } from './services/error.interceptor';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule, MetaReducer, ActionReducer } from '@ngrx/store';
import { JwtModule } from '@auth0/angular-jwt';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { CourseEntryComponent } from './lms-main-sb/courses-management/course-entry/course-entry.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { reducer } from './__reducers/appReducer';
import { authReducer } from './__reducers/auth.reducer';
export function tokenGetter() {
  return localStorage.getItem('token');
}
// console.log all actions

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
    CommonModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        whitelistedDomains: ['localhost:5001'],
        blacklistedRoutes: ['localhost:5001/api/auth'],
      },
    }),
    StoreModule.forRoot({
      mainApp: reducer,
      auth: authReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [ErrorInterceptorProvider, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
