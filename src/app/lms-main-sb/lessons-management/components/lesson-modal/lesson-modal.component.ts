import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Lesson } from 'src/app/models/lessonsAgg/lesson';

@Component({
  selector: 'app-lesson-modal',
  templateUrl: './lesson-modal.component.html',
  styleUrls: ['./lesson-modal.component.css']
})
export class LessonModalComponent implements OnInit {
  lesson: Lesson;
  bsModalRef: BsModalRef;
  constructor() { }

  ngOnInit(): void {
    console.log(this.lesson.topics);
  }

}
