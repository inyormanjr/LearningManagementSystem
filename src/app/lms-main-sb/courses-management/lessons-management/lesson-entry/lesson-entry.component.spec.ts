import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonEntryComponent } from './lesson-entry.component';

describe('LessonEntryComponent', () => {
  let component: LessonEntryComponent;
  let fixture: ComponentFixture<LessonEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
