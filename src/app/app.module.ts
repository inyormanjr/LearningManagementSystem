import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorInterceptorProvider } from './services/error.interceptor';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    JwtModule.forRoot({
      config: {
         tokenGetter,
         whitelistedDomains: ['localhost:5001'],
         blacklistedRoutes: ['localhost:5001/api/auth']
      }
   })
  ],
  providers: [
    ErrorInterceptorProvider,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
