import { Component, OnInit } from '@angular/core';
import { bounce, fadeIn, jello} from 'ngx-animate';
import { trigger, transition, useAnimation } from '@angular/animations';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { AppHelper } from 'src/app/helper/app.helper';
import { Pagination, PaginationResult } from 'src/app/models/pagination';
import { AlertifyService } from 'src/app/services/alertify.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css'],
  animations: [
    trigger('fade-in', [transition('* => *', useAnimation(fadeIn))]),
  ]
})
export class AccountsComponent implements OnInit {
  accounts: User[];
  appHelper = AppHelper;
  pagination: Pagination;
  constructor(private userService: UserService,
              private alertify: AlertifyService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((result) => {
        this.pagination = result.data.pagination;
        this.accounts = result.data.result;
    });
  }

  pageChanged(event: any) {
    this.pagination.currentPage = event.page;
    this.loadUsers();
  }

  loadUsers(search?) {
    this.userService
      .getPaginatedUsers(
        this.pagination.currentPage,
        this.pagination.itemsPerPage,
        search
      )
      .subscribe(
        (res: PaginationResult<User[]>) => {
          this.accounts = res.result;
          this.pagination = res.pagination;
        },
        (error) => {
          this.alertify.error(error);
        }
      );
  }
}
