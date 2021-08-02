import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewcontactComponent } from './adminviewcontact.component';

describe('AdminviewcontactComponent', () => {
  let component: AdminviewcontactComponent;
  let fixture: ComponentFixture<AdminviewcontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminviewcontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminviewcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
