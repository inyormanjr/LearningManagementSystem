import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmsSbUserprofileComponent } from './lms-sb-userprofile.component';

describe('LmsSbUserprofileComponent', () => {
  let component: LmsSbUserprofileComponent;
  let fixture: ComponentFixture<LmsSbUserprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmsSbUserprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmsSbUserprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
