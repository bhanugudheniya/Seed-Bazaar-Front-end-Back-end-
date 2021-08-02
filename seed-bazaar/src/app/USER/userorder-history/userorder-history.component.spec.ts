import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserorderHistoryComponent } from './userorder-history.component';

describe('UserorderHistoryComponent', () => {
  let component: UserorderHistoryComponent;
  let fixture: ComponentFixture<UserorderHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserorderHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserorderHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
