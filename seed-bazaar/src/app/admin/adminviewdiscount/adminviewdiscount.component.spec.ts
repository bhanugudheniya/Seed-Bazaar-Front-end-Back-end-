import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewdiscountComponent } from './adminviewdiscount.component';

describe('AdminviewdiscountComponent', () => {
  let component: AdminviewdiscountComponent;
  let fixture: ComponentFixture<AdminviewdiscountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminviewdiscountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminviewdiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
