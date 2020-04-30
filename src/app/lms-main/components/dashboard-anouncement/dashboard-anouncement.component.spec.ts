import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAnouncementComponent } from './dashboard-anouncement.component';

describe('DashboardAnouncementComponent', () => {
  let component: DashboardAnouncementComponent;
  let fixture: ComponentFixture<DashboardAnouncementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardAnouncementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
