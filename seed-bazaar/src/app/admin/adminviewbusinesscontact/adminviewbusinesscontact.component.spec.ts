import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewbusinesscontactComponent } from './adminviewbusinesscontact.component';

describe('AdminviewbusinesscontactComponent', () => {
  let component: AdminviewbusinesscontactComponent;
  let fixture: ComponentFixture<AdminviewbusinesscontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminviewbusinesscontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminviewbusinesscontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
