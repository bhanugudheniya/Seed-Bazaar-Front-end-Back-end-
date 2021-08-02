import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewdetailscustomerComponent } from './adminviewdetailscustomer.component';

describe('AdminviewdetailscustomerComponent', () => {
  let component: AdminviewdetailscustomerComponent;
  let fixture: ComponentFixture<AdminviewdetailscustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminviewdetailscustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminviewdetailscustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
