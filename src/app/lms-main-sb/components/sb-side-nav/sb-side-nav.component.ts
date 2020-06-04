import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sb-side-nav',
  templateUrl: './sb-side-nav.component.html',
  styleUrls: ['./sb-side-nav.component.css']
})
export class SbSideNavComponent implements OnInit {
  currentUser = '';
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.currentUser = localStorage.getItem('username');
  }

}
