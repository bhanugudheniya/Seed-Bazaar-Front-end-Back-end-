import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewcategorysubcategoryComponent } from './adminviewcategorysubcategory.component';

describe('AdminviewcategorysubcategoryComponent', () => {
  let component: AdminviewcategorysubcategoryComponent;
  let fixture: ComponentFixture<AdminviewcategorysubcategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminviewcategorysubcategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminviewcategorysubcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
