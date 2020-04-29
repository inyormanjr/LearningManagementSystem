import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ProfileComponent } from '../profile/profile.component';

const routes: Routes  = [
    {path: 'dashboard', component: DashboardComponent},
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'profile', component: ProfileComponent},
    {path: '**',  redirectTo: 'dashboard'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule
  ]
})
export class LmsMainRoutingModule { }
