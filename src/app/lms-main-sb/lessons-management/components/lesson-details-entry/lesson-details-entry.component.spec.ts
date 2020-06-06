import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonDetailsEntryComponent } from './lesson-details-entry.component';

describe('LessonDetailsEntryComponent', () => {
  let component: LessonDetailsEntryComponent;
  let fixture: ComponentFixture<LessonDetailsEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonDetailsEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonDetailsEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
