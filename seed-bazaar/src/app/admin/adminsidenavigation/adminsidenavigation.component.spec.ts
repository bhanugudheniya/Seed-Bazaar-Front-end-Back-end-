import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsidenavigationComponent } from './adminsidenavigation.component';

describe('AdminsidenavigationComponent', () => {
  let component: AdminsidenavigationComponent;
  let fixture: ComponentFixture<AdminsidenavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminsidenavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminsidenavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
