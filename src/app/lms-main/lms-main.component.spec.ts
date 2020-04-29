import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmsMainComponent } from './lms-main.component';

describe('LmsMainComponent', () => {
  let component: LmsMainComponent;
  let fixture: ComponentFixture<LmsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmsMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
