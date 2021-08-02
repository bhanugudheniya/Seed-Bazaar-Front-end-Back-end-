import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindeleteadminComponent } from './admindeleteadmin.component';

describe('AdmindeleteadminComponent', () => {
  let component: AdmindeleteadminComponent;
  let fixture: ComponentFixture<AdmindeleteadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmindeleteadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmindeleteadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
