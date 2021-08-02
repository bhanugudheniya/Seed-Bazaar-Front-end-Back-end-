import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAdminDashboardComponent } from './admin-admin-dashboard.component';

describe('AdminAdminDashboardComponent', () => {
  let component: AdminAdminDashboardComponent;
  let fixture: ComponentFixture<AdminAdminDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAdminDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAdminDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
