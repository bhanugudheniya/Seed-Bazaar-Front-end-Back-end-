import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewcustomerpageComponent } from './adminviewcustomerpage.component';

describe('AdminviewcustomerpageComponent', () => {
  let component: AdminviewcustomerpageComponent;
  let fixture: ComponentFixture<AdminviewcustomerpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminviewcustomerpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminviewcustomerpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
