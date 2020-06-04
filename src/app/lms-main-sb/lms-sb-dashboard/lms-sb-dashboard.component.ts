import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeIn } from 'ngx-animate';

@Component({
  selector: 'app-lms-sb-dashboard',
  templateUrl: './lms-sb-dashboard.component.html',
  styleUrls: ['./lms-sb-dashboard.component.css'],animations: [
    trigger('fade-in', [transition('* => *', useAnimation(fadeIn))]),
  ]
})
export class LmsSbDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
