import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  currentUser: User;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {

    this.currentUser = this.authService.getCurrentUser();
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
