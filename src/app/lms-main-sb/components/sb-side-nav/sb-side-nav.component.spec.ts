import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbSideNavComponent } from './sb-side-nav.component';

describe('SbSideNavComponent', () => {
  let component: SbSideNavComponent;
  let fixture: ComponentFixture<SbSideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbSideNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
