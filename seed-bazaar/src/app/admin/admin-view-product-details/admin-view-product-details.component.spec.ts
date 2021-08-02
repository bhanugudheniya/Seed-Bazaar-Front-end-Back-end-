import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewProductDetailsComponent } from './admin-view-product-details.component';

describe('AdminViewProductDetailsComponent', () => {
  let component: AdminViewProductDetailsComponent;
  let fixture: ComponentFixture<AdminViewProductDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminViewProductDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
