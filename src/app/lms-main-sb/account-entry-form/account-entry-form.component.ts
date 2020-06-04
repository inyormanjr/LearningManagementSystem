import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from 'src/app/services/auth.service';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeIn } from 'ngx-animate';
import { ActivatedRouteSnapshot, ActivatedRoute, Params } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { userType } from 'src/app/models/userType.enum';


@Component({
  selector: 'app-account-entry-form',
  templateUrl: './account-entry-form.component.html',
  styleUrls: ['./account-entry-form.component.css'],
  animations: [
    trigger('fade-in', [transition('* => *', useAnimation(fadeIn))]),
  ]
})
export class AccountEntryFormComponent implements OnInit {
  user: User;
  registerForm: FormGroup;
  isUpdate = false;
  id: any;
  constructor(private fBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private authService: AuthService,
              private alertify: AlertifyService,
              private userService: UserService) {

                this.createRegisterForm();
              }

  ngOnInit(): void {
      if (typeof this.activatedRoute.snapshot.params.id  !== 'undefined' ) {
          this.isUpdate = true;
          this.activatedRoute.data.subscribe((data) => {
               this.id = this.activatedRoute.snapshot.params.id;
               this.registerForm.patchValue(data.user);
          });
          }
  }

  createRegisterForm() {
    this.registerForm = this.fBuilder.group({
      type: ['Administrator'],
      firstName: ['', [Validators.required]],
      middleName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      username: ['', [Validators.required, Validators.email]],
      password: [''],
    });
  }

  register() {
    if (this.registerForm.valid) {
      this.user = Object.assign({}, this.registerForm.value);
      if(this.user.type !== userType.Administrator) {
          this.user.password = null;
      }
      this.authService.register(this.user).subscribe((result) => {
          this.clearForm();
          this.alertify.message('User successfully added.');
      }, error => this.alertify.error(error));
    }
  }

  updateUser() {
      if (this.registerForm.valid) {
         this.user = Object.assign({}, this.registerForm.value);
         this.userService.updateUser(this.id, this.user).subscribe((result) => {
          this.alertify.message('User successfully updated.');
      }, error => this.alertify.error(error));
      }
  }

  clearForm() {
    this.registerForm.reset();
  }

}
