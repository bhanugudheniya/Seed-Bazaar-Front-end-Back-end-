import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincontentspecificviewdetailsComponent } from './admincontentspecificviewdetails.component';

describe('AdmincontentspecificviewdetailsComponent', () => {
  let component: AdmincontentspecificviewdetailsComponent;
  let fixture: ComponentFixture<AdmincontentspecificviewdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmincontentspecificviewdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincontentspecificviewdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
