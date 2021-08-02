import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminfooterheaderComponent } from './adminfooterheader.component';

describe('AdminfooterheaderComponent', () => {
  let component: AdminfooterheaderComponent;
  let fixture: ComponentFixture<AdminfooterheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminfooterheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminfooterheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
