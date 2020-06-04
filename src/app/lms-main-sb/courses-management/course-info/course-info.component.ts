import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/models/CourseAgg/course.model';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css']
})
export class CourseInfoComponent implements OnInit {
  course: Course;
  instructors: User[];
  constructor(private activatedRoute: ActivatedRoute) {

    this.activatedRoute.data.subscribe((result) => {
      this.course = result.data;
    });
   }

  ngOnInit(): void {
  }

}
