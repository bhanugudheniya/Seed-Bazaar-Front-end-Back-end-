import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindiscountcodeviewdetailsComponent } from './admindiscountcodeviewdetails.component';

describe('AdmindiscountcodeviewdetailsComponent', () => {
  let component: AdmindiscountcodeviewdetailsComponent;
  let fixture: ComponentFixture<AdmindiscountcodeviewdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmindiscountcodeviewdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmindiscountcodeviewdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
