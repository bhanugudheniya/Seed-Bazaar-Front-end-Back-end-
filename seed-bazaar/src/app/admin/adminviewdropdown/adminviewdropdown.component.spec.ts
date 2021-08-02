import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewdropdownComponent } from './adminviewdropdown.component';

describe('AdminviewdropdownComponent', () => {
  let component: AdminviewdropdownComponent;
  let fixture: ComponentFixture<AdminviewdropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminviewdropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminviewdropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
