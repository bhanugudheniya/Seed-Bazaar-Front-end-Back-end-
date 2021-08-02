import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTypesReportPageComponent } from './admin-types-report-page.component';

describe('AdminTypesReportPageComponent', () => {
  let component: AdminTypesReportPageComponent;
  let fixture: ComponentFixture<AdminTypesReportPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTypesReportPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTypesReportPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
