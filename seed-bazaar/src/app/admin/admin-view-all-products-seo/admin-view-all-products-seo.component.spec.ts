import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewAllProductsSeoComponent } from './admin-view-all-products-seo.component';

describe('AdminViewAllProductsSeoComponent', () => {
  let component: AdminViewAllProductsSeoComponent;
  let fixture: ComponentFixture<AdminViewAllProductsSeoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminViewAllProductsSeoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewAllProductsSeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
