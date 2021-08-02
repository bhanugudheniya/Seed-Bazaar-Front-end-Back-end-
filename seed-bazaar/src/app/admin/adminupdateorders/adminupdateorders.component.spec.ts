import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminupdateordersComponent } from './adminupdateorders.component';

describe('AdminupdateordersComponent', () => {
  let component: AdminupdateordersComponent;
  let fixture: ComponentFixture<AdminupdateordersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminupdateordersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminupdateordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
