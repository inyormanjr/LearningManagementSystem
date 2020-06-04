import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseInfoDetailsComponent } from './course-info-details.component';

describe('CourseInfoDetailsComponent', () => {
  let component: CourseInfoDetailsComponent;
  let fixture: ComponentFixture<CourseInfoDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseInfoDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseInfoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
