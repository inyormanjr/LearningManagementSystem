import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/CourseAgg/course.model';
import { Router, ActivatedRoute } from '@angular/router';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeIn } from 'ngx-animate';
import { Pagination, PaginationResult } from 'src/app/models/pagination';
import { AppHelper } from 'src/app/helper/app.helper';
import { CoursesService } from 'src/app/services/courses.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-courses-management',
  templateUrl: './courses-management.component.html',
  styleUrls: ['./courses-management.component.css'],
  animations: [
    trigger('fade-in', [transition('* => *', useAnimation(fadeIn))]),
  ],
})
export class CoursesManagementComponent implements OnInit {
  courseData: Course[];
  appHelper = AppHelper;
  pagination: Pagination;
  constructor(private activatedRoute: ActivatedRoute, private router: Router,
              private courseService: CoursesService,
              private alertify: AlertifyService) {
    activatedRoute.data.subscribe((result) => {
      this.pagination = result.data.pagination;
      this.courseData = result.data.result;
    });
  }

  ngOnInit(): void {}

  updateCourse(courseId) {
    this.router.navigate(['home/courses/course/', courseId]);
  }

  pageChanged(event: any) {
    this.pagination.currentPage = event.page;
    this.loadUsers();
  }
  loadUsers() {
    this.courseService.getPaginated(
        this.pagination.currentPage,
        this.pagination.itemsPerPage
      )
      .subscribe(
        (res: PaginationResult<Course[]>) => {
          this.courseData = res.result;
          this.pagination = res.pagination;
        },
        (error) => {
          this.alertify.error(error);
        }
      );
  }
}
