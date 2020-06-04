import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ProfileComponent } from '../profile/profile.component';
import { AccountsComponent } from 'src/app/lms-main-sb/accounts/accounts.component';
import { AccountUpdateResolver } from 'src/app/resolvers/account.update.resolver';

const routes: Routes  = [
    {path: 'dashboard', component: DashboardComponent},
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'accounts', component: AccountsComponent},
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
