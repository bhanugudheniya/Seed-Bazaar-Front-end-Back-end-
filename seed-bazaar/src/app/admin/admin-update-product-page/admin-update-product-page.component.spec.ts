import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpdateProductPageComponent } from './admin-update-product-page.component';

describe('AdminUpdateProductPageComponent', () => {
  let component: AdminUpdateProductPageComponent;
  let fixture: ComponentFixture<AdminUpdateProductPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUpdateProductPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUpdateProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
