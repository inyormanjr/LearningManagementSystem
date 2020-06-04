import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorListGroupComponent } from './instructor-list-group.component';

describe('InstructorListGroupComponent', () => {
  let component: InstructorListGroupComponent;
  let fixture: ComponentFixture<InstructorListGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructorListGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorListGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
