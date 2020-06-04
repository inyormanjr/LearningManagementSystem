import { Component, OnInit, Input } from '@angular/core';
import { Course } from 'src/app/models/CourseAgg/course.model';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-course-info-details',
  templateUrl: './course-info-details.component.html',
  styleUrls: ['./course-info-details.component.css'],
})
export class CourseInfoDetailsComponent implements OnInit {
  @Input() course: Course;
  constructor() {
  }

  ngOnInit(): void {}
}
