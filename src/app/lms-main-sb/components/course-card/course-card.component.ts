import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CourseCardModel } from './course.card.model';
import { Course } from 'src/app/models/CourseAgg/course.model';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
})
export class CourseCardComponent implements OnInit {
  @Output() public oncClick: EventEmitter<any> = new EventEmitter();
  @Input() courseCardModel: Course;
  constructor() {}

  ngOnInit(): void { }

  runClick(): void {
    this.oncClick.emit();
  }
}
