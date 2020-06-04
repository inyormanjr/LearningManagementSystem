import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmsSbDashboardComponent } from './lms-sb-dashboard.component';

describe('LmsSbDashboardComponent', () => {
  let component: LmsSbDashboardComponent;
  let fixture: ComponentFixture<LmsSbDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmsSbDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmsSbDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
