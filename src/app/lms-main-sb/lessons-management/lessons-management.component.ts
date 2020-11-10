import { Component, OnInit, Input } from '@angular/core';
import { Lesson } from 'src/app/models/lessonsAgg/lesson';
import { Course } from 'src/app/models/CourseAgg/course.model';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { LessonModalComponent } from './components/lesson-modal/lesson-modal.component';

@Component({
  selector: 'app-lessons-management',
  templateUrl: './lessons-management.component.html',
  styleUrls: ['./lessons-management.component.css'],
})
export class LessonsManagementComponent implements OnInit {
  @Input() course: Course;
  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {}

  showLessonPreviewDialog(lesson) {
    const initialState = { lesson };

    this.bsModalRef = this.modalService.show(LessonModalComponent, Object.assign({initialState}, {class: 'modal-lg'}));
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}
