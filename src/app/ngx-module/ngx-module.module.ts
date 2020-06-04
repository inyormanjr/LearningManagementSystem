import { NgModule } from '@angular/core';
import {  PaginationModule } from 'ngx-bootstrap/pagination';

import { BsDatepickerModule, BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [],
  imports: [
    PaginationModule.forRoot(),
    BsDatepickerModule.forRoot(),

  ],
  exports: [
    PaginationModule,
    BsDatepickerModule,
  ]
})
export class NgxModuleModule { }
