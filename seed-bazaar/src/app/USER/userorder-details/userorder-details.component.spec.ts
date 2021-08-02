import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserorderDetailsComponent } from './userorder-details.component';

describe('UserorderDetailsComponent', () => {
  let component: UserorderDetailsComponent;
  let fixture: ComponentFixture<UserorderDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserorderDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserorderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
