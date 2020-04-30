import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardStudentProgressTabComponent } from './dashboard-student-progress-tab.component';

describe('DashboardStudentProgressTabComponent', () => {
  let component: DashboardStudentProgressTabComponent;
  let fixture: ComponentFixture<DashboardStudentProgressTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardStudentProgressTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardStudentProgressTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
