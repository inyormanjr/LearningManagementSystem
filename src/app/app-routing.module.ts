import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { LmsMainSbComponent } from './lms-main-sb/lms-main-sb/lms-main-sb.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: '', runGuardsAndResolvers: 'always', canActivate: [AuthGuard],
  children: [
    {path: 'home', component: LmsMainSbComponent,
     loadChildren: () => import('../app/lms-main-sb/lms-main-sb.module').then(m => m.LmsMainSbModule)},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', redirectTo: 'home', pathMatch: 'full'}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
