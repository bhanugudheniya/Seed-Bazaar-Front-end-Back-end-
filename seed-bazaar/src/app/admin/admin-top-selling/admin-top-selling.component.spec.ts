import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTopSellingComponent } from './admin-top-selling.component';

describe('AdminTopSellingComponent', () => {
  let component: AdminTopSellingComponent;
  let fixture: ComponentFixture<AdminTopSellingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTopSellingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTopSellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
