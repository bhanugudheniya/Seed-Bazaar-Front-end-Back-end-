import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewOrderProductsComponent } from './admin-view-order-products.component';

describe('AdminViewOrderProductsComponent', () => {
  let component: AdminViewOrderProductsComponent;
  let fixture: ComponentFixture<AdminViewOrderProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminViewOrderProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewOrderProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
