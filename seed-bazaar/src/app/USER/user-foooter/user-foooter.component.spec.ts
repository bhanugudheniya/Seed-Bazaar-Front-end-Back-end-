import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFoooterComponent } from './user-foooter.component';

describe('UserFoooterComponent', () => {
  let component: UserFoooterComponent;
  let fixture: ComponentFixture<UserFoooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFoooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFoooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
