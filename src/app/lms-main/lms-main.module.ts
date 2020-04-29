import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LmsMainComponent } from './lms-main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { LmsMainRoutingModule } from './lms-main-routing/lms-main-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';



@NgModule({
  exports: [
    LmsMainComponent,
    DashboardComponent,
    ProfileComponent,
    NavBarComponent
  ],
  declarations: [LmsMainComponent, DashboardComponent, ProfileComponent, NavBarComponent],
  imports: [
    LmsMainRoutingModule,
    CommonModule,
  ],
})
export class LmsMainModule { }
