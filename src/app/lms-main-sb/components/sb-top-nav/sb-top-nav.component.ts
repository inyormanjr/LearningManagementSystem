import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sb-top-nav',
  templateUrl: './sb-top-nav.component.html',
  styleUrls: ['./sb-top-nav.component.css'],
})
export class SbTopNavComponent implements OnInit {
  @Input() intialToggleState;
  @Output() isToggled = new EventEmitter();
  constructor(private router: Router) {}
  ngOnInit(): void {}

  toggle() {
     this.isToggled.emit(!this.intialToggleState);
  }
  logOut() {
    localStorage.clear();
    this.router.navigateByUrl('login');
  }
}
