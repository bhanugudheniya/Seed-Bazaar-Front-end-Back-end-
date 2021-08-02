import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSalesDateRangeComponent } from './admin-sales-date-range.component';

describe('AdminSalesDateRangeComponent', () => {
  let component: AdminSalesDateRangeComponent;
  let fixture: ComponentFixture<AdminSalesDateRangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSalesDateRangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSalesDateRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
