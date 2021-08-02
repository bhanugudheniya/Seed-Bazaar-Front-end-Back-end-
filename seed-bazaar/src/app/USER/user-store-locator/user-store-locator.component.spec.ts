import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStoreLocatorComponent } from './user-store-locator.component';

describe('UserStoreLocatorComponent', () => {
  let component: UserStoreLocatorComponent;
  let fixture: ComponentFixture<UserStoreLocatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserStoreLocatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserStoreLocatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
