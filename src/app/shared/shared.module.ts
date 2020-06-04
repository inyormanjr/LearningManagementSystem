import { NgModule } from '@angular/core';
import { SbDashboardCardComponent } from './sb-dashboard-card/sb-dashboard-card.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SbDashboardCardComponent],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  exports: [
    SbDashboardCardComponent,

  ]
})
export class SharedModule { }
