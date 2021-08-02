import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewAllProductsActiveComponent } from './admin-view-all-products-active.component';

describe('AdminViewAllProductsActiveComponent', () => {
  let component: AdminViewAllProductsActiveComponent;
  let fixture: ComponentFixture<AdminViewAllProductsActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminViewAllProductsActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewAllProductsActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
