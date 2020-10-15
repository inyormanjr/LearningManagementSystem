import { NgModule } from '@angular/core';
import {  PaginationModule } from 'ngx-bootstrap/pagination';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AccordionModule } from "ngx-bootstrap/accordion";
import { BsDatepickerModule, BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    PaginationModule.forRoot(),
    BsDatepickerModule.forRoot(),
    AccordionModule.forRoot(),
    ModalModule.forRoot(),
  ],
  exports: [PaginationModule, BsDatepickerModule, AccordionModule],
})
export class NgxModuleModule {}
