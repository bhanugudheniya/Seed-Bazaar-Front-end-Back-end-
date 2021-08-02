import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewallcategoryComponent } from './adminviewallcategory.component';

describe('AdminviewallcategoryComponent', () => {
  let component: AdminviewallcategoryComponent;
  let fixture: ComponentFixture<AdminviewallcategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminviewallcategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminviewallcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
