import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbTopNavComponent } from './sb-top-nav.component';

describe('SbTopNavComponent', () => {
  let component: SbTopNavComponent;
  let fixture: ComponentFixture<SbTopNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbTopNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbTopNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
