import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewallordersComponent } from './adminviewallorders.component';

describe('AdminviewallordersComponent', () => {
  let component: AdminviewallordersComponent;
  let fixture: ComponentFixture<AdminviewallordersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminviewallordersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminviewallordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
