import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  FormControl,
} from '@angular/forms';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { userType } from 'src/app/models/userType.enum';
import { Course } from 'src/app/models/CourseAgg/course.model';
import { AlertifyService } from 'src/app/services/alertify.service';
import { CoursesService } from 'src/app/services/courses.service';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeIn } from 'ngx-animate';
@Component({
  selector: 'app-course-entry',
  templateUrl: './course-entry.component.html',
  styleUrls: ['./course-entry.component.css'],
  animations: [
    trigger('fade-in', [transition('* => *', useAnimation(fadeIn))]),
  ],
})
export class CourseEntryComponent implements OnInit {
  courseModel: Course;
  isNew = true;
  routeStringArray = [];
  previewLinkName = 'courses';
  courseEntryFormGroup: FormGroup;
  public courseSummaryEditor = ClassicEditor;
  instructorsSelections: User[];
  selectedInstructor: User;
  selectedInstructors: User[] = [];
  instructors: FormArray;
  constructor(
    private fBuilder: FormBuilder,
    private userService: UserService,
    private alertify: AlertifyService,
    private courseService: CoursesService,
    private activatedRoute: ActivatedRoute
  ) {
    userService.getUsersByType(userType.Instructor).subscribe((result) => {
      this.instructorsSelections = result;
      this.selectedInstructor = this.instructorsSelections[0];
    });
  }

  ngOnInit(): void {
    this.initializeForm();
    this.activatedRoute.data.subscribe((result) => {
      if (typeof this.activatedRoute.snapshot.params.id !== 'undefined') {
        this.isNew = false;
        this.routeStringArray = this.isNew
          ? ['/home/courses']
          : ['/home/courses/course', this.activatedRoute.snapshot.params.id];
        this.previewLinkName = this.isNew ? 'Courses' : 'Course info';
        this.courseEntryFormGroup.patchValue(result.course);
        result.course.assignedInstructors.forEach((element) => {
          (this.courseEntryFormGroup.get(
            'assignedInstructors'
          ) as FormArray).push(new FormControl(element));
        });
      }
    });
  }

  initializeForm() {
    this.courseEntryFormGroup = this.fBuilder.group({
      id: [''],
      courseName: ['', [Validators.required]],
      courseShortName: ['', [Validators.required]],
      courseCode: [''],
      courseCategory: ['Programming'],
      courseDate: ['', [Validators.required]],
      courseSummary: ['', [Validators.required]],
      courseImage: [''],
      assignedInstructors: new FormArray([]),
    });
    this.instructors = this.courseEntryFormGroup.get(
      'assignedInstructors'
    ) as FormArray;
  }

  getIncludedInstructor(): FormArray {
    return this.courseEntryFormGroup.get('assignedInstructors') as FormArray;
  }

  includeInstructor(sInstructor) {
    const listOfInstructors = this.getIncludedInstructor();
    if (listOfInstructors.value.indexOf(sInstructor) === -1) {
      (this.courseEntryFormGroup.get('assignedInstructors') as FormArray).push(
        new FormControl(this.selectedInstructor)
      );
    } else {
      this.alertify.warning('Instructor already exist');
    }
  }

  getSelectedIntstructor(instructor) {
    this.selectedInstructor = instructor;
  }

  removeInstructor(index) {
    (this.courseEntryFormGroup.get(
      'assignedInstructors'
    ) as FormArray).removeAt(index);
  }

  save() {
    this.courseModel = Object.assign({}, this.courseEntryFormGroup.value);
    this.courseService.create(this.courseModel).subscribe(
      (result) => {
        this.initializeForm();
        this.alertify.message('New course created');
      },
      (error) => this.alertify.error(error)
    );
  }

  update() {
    this.courseModel = Object.assign({}, this.courseEntryFormGroup.value);
    this.courseService
      .update(this.activatedRoute.snapshot.params.id, this.courseModel)
      .subscribe(
        (result) => {
          this.alertify.message('Course Updated');
        },
        (error) => this.alertify.error(error)
      );
  }
}
