import { Component, OnInit, Input } from '@angular/core';
import { Lesson } from 'src/app/models/lessonsAgg/lesson';
import { Course } from 'src/app/models/CourseAgg/course.model';

@Component({
  selector: 'app-lessons-management',
  templateUrl: './lessons-management.component.html',
  styleUrls: ['./lessons-management.component.css'],
})
export class LessonsManagementComponent implements OnInit {
  @Input() course: Course;
  lessons: Lesson[] = [
    {
      title: 'C# - Home',
      subTitle: '',
      dateCreated: null,
      duration: 5,
      topics: [] },
    {
      title: 'C# - Environment',
      subTitle: '',
      dateCreated: null,
      duration: 22,
      topics: [],
    },
    {
      title: 'C# - Programming Structure',
      subTitle: '',
      dateCreated: null,
      duration: 22,
      topics: [],
    },
    {
      title: 'C# - Basic Syntax',
      subTitle: '',
      dateCreated: null,
      duration: 22,
      topics: [],
    },
    {
      title: 'C# - Data Types',
      subTitle: '',
      dateCreated: null,
      duration: 33,
      topics: [],
    },
    {
      title: 'C# - Data Types',
      subTitle: '',
      dateCreated: null,
      duration: 2,
      topics: [],
    },
    {
      title: 'C# - Data Types',
      subTitle: '',
      dateCreated: null,
      duration: 5,
      topics: [],
    },
    {
      title: 'C# - Data Types',
      subTitle: '',
      dateCreated: null,
      duration: 5,
      topics: [],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
