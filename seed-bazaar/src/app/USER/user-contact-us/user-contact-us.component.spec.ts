import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserContactUsComponent } from './user-contact-us.component';

describe('UserContactUsComponent', () => {
  let component: UserContactUsComponent;
  let fixture: ComponentFixture<UserContactUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserContactUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
