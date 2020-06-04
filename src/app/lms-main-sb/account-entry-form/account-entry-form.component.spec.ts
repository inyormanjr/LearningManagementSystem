import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountEntryFormComponent } from './account-entry-form.component';

describe('AccountEntryFormComponent', () => {
  let component: AccountEntryFormComponent;
  let fixture: ComponentFixture<AccountEntryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountEntryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountEntryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
