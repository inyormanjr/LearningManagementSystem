import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LmsMainComponent } from './lms-main/lms-main.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: '', runGuardsAndResolvers: 'always', canActivate: [AuthGuard],
  children: [
    {path: 'home', component: LmsMainComponent, loadChildren: () => import('../app/lms-main/lms-main.module').then(m => m.LmsMainModule)},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', component: LmsMainComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
