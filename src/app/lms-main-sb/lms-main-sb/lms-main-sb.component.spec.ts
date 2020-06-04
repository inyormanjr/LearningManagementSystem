import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmsMainSbComponent } from './lms-main-sb.component';

describe('LmsMainSbComponent', () => {
  let component: LmsMainSbComponent;
  let fixture: ComponentFixture<LmsMainSbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmsMainSbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmsMainSbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
