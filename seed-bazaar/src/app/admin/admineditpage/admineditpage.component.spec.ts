import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditpageComponent } from './admineditpage.component';

describe('AdmineditpageComponent', () => {
  let component: AdmineditpageComponent;
  let fixture: ComponentFixture<AdmineditpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmineditpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmineditpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
