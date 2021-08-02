import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsidenavigationheaderComponent } from './adminsidenavigationheader.component';

describe('AdminsidenavigationheaderComponent', () => {
  let component: AdminsidenavigationheaderComponent;
  let fixture: ComponentFixture<AdminsidenavigationheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminsidenavigationheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminsidenavigationheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
