import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LmsMainComponent } from './lms-main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { LmsMainRoutingModule } from './lms-main-routing/lms-main-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DashboardCardItemComponent } from './components/dashboard-card-item/dashboard-card-item.component';
import { DashboardStudentProgressTabComponent } from './components/dashboard-student-progress-tab/dashboard-student-progress-tab.component';
import { DashboardAnouncementComponent } from './components/dashboard-anouncement/dashboard-anouncement.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';



@NgModule({
  exports: [
  ],
  declarations: [LmsMainComponent, DashboardComponent,
    CKEditorModule,
     ProfileComponent, NavBarComponent,
      DashboardCardItemComponent,
      DashboardStudentProgressTabComponent,
       DashboardAnouncementComponent],
  imports: [
    LmsMainRoutingModule,
    CommonModule,
  ],
})
export class LmsMainModule { }
