import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAllPageHeaderComponent } from './user-all-page-header.component';

describe('UserAllPageHeaderComponent', () => {
  let component: UserAllPageHeaderComponent;
  let fixture: ComponentFixture<UserAllPageHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAllPageHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAllPageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
