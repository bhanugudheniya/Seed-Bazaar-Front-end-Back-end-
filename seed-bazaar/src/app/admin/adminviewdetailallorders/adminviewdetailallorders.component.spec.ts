import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewdetailallordersComponent } from './adminviewdetailallorders.component';

describe('AdminviewdetailallordersComponent', () => {
  let component: AdminviewdetailallordersComponent;
  let fixture: ComponentFixture<AdminviewdetailallordersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminviewdetailallordersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminviewdetailallordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
