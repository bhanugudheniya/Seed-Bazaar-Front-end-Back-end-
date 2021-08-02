import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminstockmanageComponent } from './adminstockmanage.component';

describe('AdminstockmanageComponent', () => {
  let component: AdminstockmanageComponent;
  let fixture: ComponentFixture<AdminstockmanageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminstockmanageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminstockmanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
