import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbDashboardCardComponent } from './sb-dashboard-card.component';

describe('SbDashboardCardComponent', () => {
  let component: SbDashboardCardComponent;
  let fixture: ComponentFixture<SbDashboardCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbDashboardCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbDashboardCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
