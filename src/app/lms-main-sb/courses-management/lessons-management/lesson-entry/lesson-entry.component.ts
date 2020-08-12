import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { AlertifyService } from 'src/app/services/alertify.service';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/models/CourseAgg/course.model';
import { CoursesService } from 'src/app/services/courses.service';
import { Lesson } from 'src/app/models/lessonsAgg/lesson';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-lesson-entry',
  templateUrl: './lesson-entry.component.html',
  styleUrls: ['./lesson-entry.component.css'],
})
export class LessonEntryComponent implements OnInit {
  public editor = ClassicEditor;
  lessonFormGroup: FormGroup;
  course: Course;

  constructor(
    private fbBuilder: FormBuilder,
    private alertify: AlertifyService,
    private activateRoute: ActivatedRoute,
    private courseService: CoursesService
  ) {
    this.initializeForm();
    this.activateRoute.data.subscribe((result) => {
      this.course = result.course;
      if (this.course.lessons.length > 0) {
        this.initializeExistingState();
      } else {
        this.initialNewFormState();
      }
    });
  }

  initialNewFormState() {
    (this.lessonFormGroup.controls.lessons as FormArray).push(this._lesson);
  }
  initializeExistingState() {
    this.course.lessons.forEach((lesson) => {
      const tobeAddedLesson = this._lesson;
      tobeAddedLesson.patchValue(lesson);
      lesson.topics.forEach((topic) => {
        const tobeAddedTopic = this.topic;
        tobeAddedTopic.patchValue(topic);
        (tobeAddedLesson.controls.topics as FormArray).push(tobeAddedTopic);
      });
      (this.lessonFormGroup.controls.lessons as FormArray).push(
        tobeAddedLesson
      );
    });
  }

  initializeForm() {
    this.lessonFormGroup = this.fbBuilder.group({
      lessons: this.fbBuilder.array([]),
    });
  }

  saveCourse() {
    this.course.lessons = Object.assign([], this.lessonFormGroup.value.lessons);
    this.alertify.confirm('Save changes?', () => {
      this.courseService
        .update(this.course.id, this.course)
        .subscribe((result) => {
          this.alertify.message('Save Successfully');
        });
    });
  }

  get _lesson(): FormGroup {
      return this.fbBuilder.group({
        title: ['', [Validators.required]],
        subTitle: ['', [Validators.required]],
        duration: [5, [Validators.required, Validators.min(1)]],
        topics: this.fbBuilder.array([]),
      });
  }

  get topic(): FormGroup {
    return this.fbBuilder.group({
      index: 0,
      title: ['', [Validators.required]],
      details: ['', [Validators.required]],
      sample: ['', [Validators.required]],
      exercise: this.exercise,
    });
  }

  get exercise(): FormGroup {
    return this.fbBuilder.group({
      instructions: ['', [Validators.required]],
      exerciseDetails: ['', [Validators.required]],
      exerciseBasis: ['', [Validators.required]]
    });
  }

  addTopic(lessonIndex) {
    const topics = this.topicsControlArray(lessonIndex);
    console.log(topics.length);
    const topicIndex = topics.length ===  0 ? 0 : topics.length - 1;
    const currentIndex = topicIndex === 0 ? 0 : topics.value[topicIndex].index;
    topics.push(this.generateNewTopicFormControl(currentIndex + 1));
  }

  addLesson() {
    (this.lessonFormGroup.controls.lessons as FormArray).push(this._lesson);
  }

  removeLesson(index) {
     this.alertify.confirm('Do you want to delete this Lesson?', () => {
    (this.lessonFormGroup.controls.lessons as FormArray).removeAt(index);
     });
  }

  public topicsControlArray(lessonIndex): FormArray {
    return (this.lessonFormGroup.controls.lessons as FormArray).controls[
      lessonIndex
    ].get('topics') as FormArray;
  }

  generateNewTopicFormControl(indexValue) {
    return this.fbBuilder.group({
      id: '',
      index: indexValue,
      title: '',
      details: '',
      sample: '',
      exercise: this.exercise
    });
  }

  deleteTopic(indexLesson, indexTopic) {
    this.alertify.confirm('Do you want to delete this topic?', () => {
      this.topicsControlArray(indexLesson).removeAt(indexTopic);
    });
  }

  trackByFn(index: any, item: any) {
    return index;
  }

  ngOnInit(): void {}
}
