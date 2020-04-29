import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AlertifyService } from '../services/alertify.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginModel: any = {};
  loginForm: FormGroup;
  isLoading = false;

  constructor(private fb: FormBuilder, private alertify: AlertifyService,
              private authService: AuthService, private router: Router) { }

  createForm() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }


  ngOnInit(): void {
    this.createForm();
  }

  login() {
      this.loginModel = this.loginForm.value;
      this.authService.login(this.loginModel).subscribe(() => {
      this.loginModel = {};
      this.router.navigate(['/home']);
    }, error => {
      this.alertify.error(error);
     });
   }

}
