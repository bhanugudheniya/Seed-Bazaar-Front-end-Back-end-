import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminupdatecustomeraccountComponent } from './adminupdatecustomeraccount.component';

describe('AdminupdatecustomeraccountComponent', () => {
  let component: AdminupdatecustomeraccountComponent;
  let fixture: ComponentFixture<AdminupdatecustomeraccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminupdatecustomeraccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminupdatecustomeraccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
