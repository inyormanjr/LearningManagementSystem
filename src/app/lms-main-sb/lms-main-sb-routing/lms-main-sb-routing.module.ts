import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LmsSbDashboardComponent } from '../lms-sb-dashboard/lms-sb-dashboard.component';
import { LmsSbUserprofileComponent } from '../lms-sb-userprofile/lms-sb-userprofile.component';
import { AccountsComponent } from '../accounts/accounts.component';
import { AccountEntryFormComponent } from '../account-entry-form/account-entry-form.component';
import { AccountUpdateResolver } from 'src/app/resolvers/account.update.resolver';
import { AccountPageListResolver } from 'src/app/resolvers/account.pagelist.resolver';
import { ContentManagementComponent } from '../content-management/content-management.component';
import { CoursesManagementComponent } from '../courses-management/courses-management.component';
import { LessonsManagementComponent } from '../lessons-management/lessons-management.component';
import { AssessmentManagementComponent } from '../assessment-management/assessment-management.component';
import { ActivitiesManagementComponent } from '../activities-management/activities-management.component';
import { CourseEntryComponent } from 'src/app/lms-main-sb/courses-management/course-entry/course-entry.component';
import { CourseUpdateResolver } from 'src/app/resolvers/course.update.resolver';
import { CoursePageListResolver } from 'src/app/resolvers/course.pagelist.resolver';
import { CourseInfoComponent } from '../courses-management/course-info/course-info.component';
import { LessonEntryComponent } from '../courses-management/lessons-management/lesson-entry/lesson-entry.component';



const routes: Routes = [
  { path: 'dashboard', component: LmsSbDashboardComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'accounts',
    component: AccountsComponent,
    resolve: { data: AccountPageListResolver },
  },
  { path: 'accounts/entry', component: AccountEntryFormComponent },
  {
    path: 'accounts/update/:id',
    component: AccountEntryFormComponent,
    resolve: { user: AccountUpdateResolver },
  },
  {
    path: 'courses',
    component: CoursesManagementComponent,
    resolve: { data: CoursePageListResolver },
  },
  { path: 'courses/entry', component: CourseEntryComponent },
  {
    path: 'courses/course/:id',
    component: CourseInfoComponent,
    resolve: { data: CourseUpdateResolver },
  },
  {
    path: 'courses/entry/:id',
    component: CourseEntryComponent,
    resolve: { course: CourseUpdateResolver },
  },
  {
    path: 'courses/lessons/entry/:id',
    component: LessonEntryComponent,
    resolve: { course: CourseUpdateResolver },
  },
  { path: 'lessons', component: LessonsManagementComponent },
  { path: 'assessments', component: AssessmentManagementComponent },
  { path: 'activities', component: ActivitiesManagementComponent },
  { path: 'contentmanagement', component: ContentManagementComponent },
  { path: 'profile', component: LmsSbUserprofileComponent },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
declarations: [],
imports: [
  RouterModule.forChild(routes),
  CommonModule,
],
exports: [RouterModule
]
})
export class LmsMainSbRoutingModule { }
