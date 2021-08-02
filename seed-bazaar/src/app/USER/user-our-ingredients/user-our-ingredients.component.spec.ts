import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOurIngredientsComponent } from './user-our-ingredients.component';

describe('UserOurIngredientsComponent', () => {
  let component: UserOurIngredientsComponent;
  let fixture: ComponentFixture<UserOurIngredientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserOurIngredientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOurIngredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
