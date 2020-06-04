import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AlertifyService } from '../services/alertify.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounce, fadeIn} from 'ngx-animate';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css',],
  animations: [
    trigger('fade-in', [transition('* => *', useAnimation(fadeIn, {
      params: {timing: 2, delay: 0}
    }))])
  ]
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
      this.isLoading = true;
      this.authService.login(this.loginModel).subscribe(() => {
        this.isLoading = false;
        this.loginModel = {};
        this.router.navigate(['/home']);
    }, error => {
      this.isLoading = false;
      this.alertify.error(error);
     });
   }

}
