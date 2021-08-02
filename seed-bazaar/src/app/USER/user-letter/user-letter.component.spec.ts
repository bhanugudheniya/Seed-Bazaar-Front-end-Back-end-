import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLetterComponent } from './user-letter.component';

describe('UserLetterComponent', () => {
  let component: UserLetterComponent;
  let fixture: ComponentFixture<UserLetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
