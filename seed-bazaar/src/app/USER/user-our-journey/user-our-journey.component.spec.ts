import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOurJourneyComponent } from './user-our-journey.component';

describe('UserOurJourneyComponent', () => {
  let component: UserOurJourneyComponent;
  let fixture: ComponentFixture<UserOurJourneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserOurJourneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOurJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
