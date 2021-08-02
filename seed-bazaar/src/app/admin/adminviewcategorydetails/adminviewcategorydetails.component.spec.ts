import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewcategorydetailsComponent } from './adminviewcategorydetails.component';

describe('AdminviewcategorydetailsComponent', () => {
  let component: AdminviewcategorydetailsComponent;
  let fixture: ComponentFixture<AdminviewcategorydetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminviewcategorydetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminviewcategorydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
