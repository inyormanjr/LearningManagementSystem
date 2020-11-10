import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentResourceManagementComponent } from './student-resource-management.component';

describe('StudentResourceManagementComponent', () => {
  let component: StudentResourceManagementComponent;
  let fixture: ComponentFixture<StudentResourceManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentResourceManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentResourceManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
