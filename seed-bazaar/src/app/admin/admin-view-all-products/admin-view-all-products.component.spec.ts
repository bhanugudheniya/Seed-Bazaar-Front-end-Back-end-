import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewAllProductsComponent } from './admin-view-all-products.component';

describe('AdminViewAllProductsComponent', () => {
  let component: AdminViewAllProductsComponent;
  let fixture: ComponentFixture<AdminViewAllProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminViewAllProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewAllProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
