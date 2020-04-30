import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounce, fadeIn, jello} from 'ngx-animate';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    trigger('fade-in', [transition('* => *', useAnimation(fadeIn, {
      params: {timing: 2, delay: 0}
    }))]),
    trigger('jello', [transition('* => *', useAnimation(jello, {
      params: {timing: 2, delay: 0}
    }))]),
    trigger('bounce', [transition('* => *', useAnimation(bounce, {
      params: {timing: 2, delay: 0}
    }))])
  ]
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
