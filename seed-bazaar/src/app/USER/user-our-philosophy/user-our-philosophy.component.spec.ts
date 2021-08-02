import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOurPhilosophyComponent } from './user-our-philosophy.component';

describe('UserOurPhilosophyComponent', () => {
  let component: UserOurPhilosophyComponent;
  let fixture: ComponentFixture<UserOurPhilosophyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserOurPhilosophyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOurPhilosophyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
