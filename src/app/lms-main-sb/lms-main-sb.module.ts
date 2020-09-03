import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LmsMainSbComponent } from './lms-main-sb/lms-main-sb.component';
import { CKEditorModule } from "@ckeditor/ckeditor5-angular";
import { SbTopNavComponent } from './components/sb-top-nav/sb-top-nav.component';
import { SbSideNavComponent } from './components/sb-side-nav/sb-side-nav.component';
import { LmsMainSbRoutingModule } from './lms-main-sb-routing/lms-main-sb-routing.module';
import { LmsSbDashboardComponent } from './lms-sb-dashboard/lms-sb-dashboard.component';
import { LmsSbUserprofileComponent } from './lms-sb-userprofile/lms-sb-userprofile.component';
import { AccountsComponent } from './accounts/accounts.component';
import { DashboardAnouncementComponent } from '../lms-main/components/dashboard-anouncement/dashboard-anouncement.component';
import { DashboardStudentProgressTabComponent } from '../lms-main/components/dashboard-student-progress-tab/dashboard-student-progress-tab.component';
import { SharedModule } from '../shared/shared.module';
import { AccountEntryFormComponent } from './account-entry-form/account-entry-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
import { AccountUpdateResolver } from '../resolvers/account.update.resolver';
import { NgxModuleModule } from '../ngx-module/ngx-module.module';
import { AccountPageListResolver } from '../resolvers/account.pagelist.resolver';
import { ContentManagementComponent } from './content-management/content-management.component';
import { CoursesManagementComponent } from './courses-management/courses-management.component';
import { LessonsManagementComponent } from './lessons-management/lessons-management.component';
import { AssessmentManagementComponent } from './assessment-management/assessment-management.component';
import { ActivitiesManagementComponent } from './activities-management/activities-management.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { FileUploadModule } from 'ng2-file-upload';
import { DndFileComponent } from './components/dnd-file/dnd-file.component';
import { CourseEntryComponent } from './courses-management/course-entry/course-entry.component';
import { InstructorListGroupComponent } from './components/instructor-list-group/instructor-list-group.component';
import { CourseUpdateResolver } from '../resolvers/course.update.resolver';
import { CoursePageListResolver } from '../resolvers/course.pagelist.resolver';
import { CourseInfoComponent } from './courses-management/course-info/course-info.component';
import { CourseInfoDetailsComponent } from './courses-management/course-info-details/course-info-details.component';
import { LessonEntryComponent } from './courses-management/lessons-management/lesson-entry/lesson-entry.component';
import { LessonDetailsEntryComponent } from './lessons-management/components/lesson-details-entry/lesson-details-entry.component';
import { LessonPreviewComponent } from './courses-management/lessons-management/lesson-preview/lesson-preview.component';





@NgModule({
  declarations: [
    LmsMainSbComponent,
    SbTopNavComponent,
    SbSideNavComponent,
    LmsSbDashboardComponent,
    LmsSbUserprofileComponent,
    AccountsComponent,
    DashboardAnouncementComponent,
    DashboardStudentProgressTabComponent,
    AccountEntryFormComponent,
    ContentManagementComponent,
    CoursesManagementComponent,
    LessonsManagementComponent,
    AssessmentManagementComponent,
    ActivitiesManagementComponent,
    PageHeaderComponent,
    CourseEntryComponent,
    CourseCardComponent,
    DndFileComponent,
    InstructorListGroupComponent,
    CourseInfoComponent,
    CourseInfoDetailsComponent,
    LessonEntryComponent,
    LessonDetailsEntryComponent,
    LessonPreviewComponent,
  ],

  imports: [
    CommonModule,
    FormsModule,
    CKEditorModule,
    FileUploadModule,
    ReactiveFormsModule,
    LmsMainSbRoutingModule,
    SharedModule,
    NgxModuleModule,
  ],
  exports: [],
  providers: [
    UserService,
    AccountPageListResolver,
    AccountUpdateResolver,
    CoursePageListResolver,
    CourseUpdateResolver,
  ],
})
export class LmsMainSbModule {}
