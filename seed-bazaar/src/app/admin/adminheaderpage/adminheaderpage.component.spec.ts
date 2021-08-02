import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminheaderpageComponent } from './adminheaderpage.component';

describe('AdminheaderpageComponent', () => {
  let component: AdminheaderpageComponent;
  let fixture: ComponentFixture<AdminheaderpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminheaderpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminheaderpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
