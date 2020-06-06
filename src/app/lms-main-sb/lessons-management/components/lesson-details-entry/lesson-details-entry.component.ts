import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormGroupName, FormArrayName } from '@angular/forms';

@Component({
  selector: 'app-lesson-details-entry',
  templateUrl: './lesson-details-entry.component.html',
  styleUrls: ['./lesson-details-entry.component.css']
})
export class LessonDetailsEntryComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Input() formArrayName: FormArrayName;
  @Input() formGroupName: FormGroupName;
  constructor() { }

  ngOnInit(): void {
  }

}
