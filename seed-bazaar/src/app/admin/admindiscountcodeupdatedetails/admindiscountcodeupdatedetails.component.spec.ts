import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindiscountcodeupdatedetailsComponent } from './admindiscountcodeupdatedetails.component';

describe('AdmindiscountcodeupdatedetailsComponent', () => {
  let component: AdmindiscountcodeupdatedetailsComponent;
  let fixture: ComponentFixture<AdmindiscountcodeupdatedetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmindiscountcodeupdatedetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmindiscountcodeupdatedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
