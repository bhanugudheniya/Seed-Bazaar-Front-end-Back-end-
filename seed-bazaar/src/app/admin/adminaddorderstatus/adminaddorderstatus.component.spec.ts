import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminaddorderstatusComponent } from './adminaddorderstatus.component';

describe('AdminaddorderstatusComponent', () => {
  let component: AdminaddorderstatusComponent;
  let fixture: ComponentFixture<AdminaddorderstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminaddorderstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminaddorderstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
