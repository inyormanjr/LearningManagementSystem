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
import { JwtModule } from '@auth0/angular-jwt';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { CourseEntryComponent } from './lms-main-sb/courses-management/course-entry/course-entry.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
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
         blacklistedRoutes: ['localhost:5001/api/auth']
      }
   }),
  ],
  providers: [
    ErrorInterceptorProvider,
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
