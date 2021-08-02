import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincustomerdateComponent } from './admincustomerdate.component';

describe('AdmincustomerdateComponent', () => {
  let component: AdmincustomerdateComponent;
  let fixture: ComponentFixture<AdmincustomerdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmincustomerdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincustomerdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
