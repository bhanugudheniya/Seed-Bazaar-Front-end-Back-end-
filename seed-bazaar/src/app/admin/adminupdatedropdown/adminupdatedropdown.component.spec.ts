import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminupdatedropdownComponent } from './adminupdatedropdown.component';

describe('AdminupdatedropdownComponent', () => {
  let component: AdminupdatedropdownComponent;
  let fixture: ComponentFixture<AdminupdatedropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminupdatedropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminupdatedropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
