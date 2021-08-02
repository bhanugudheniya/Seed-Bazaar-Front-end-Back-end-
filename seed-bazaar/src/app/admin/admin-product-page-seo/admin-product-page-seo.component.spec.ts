import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductPageSeoComponent } from './admin-product-page-seo.component';

describe('AdminProductPageSeoComponent', () => {
  let component: AdminProductPageSeoComponent;
  let fixture: ComponentFixture<AdminProductPageSeoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProductPageSeoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProductPageSeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
