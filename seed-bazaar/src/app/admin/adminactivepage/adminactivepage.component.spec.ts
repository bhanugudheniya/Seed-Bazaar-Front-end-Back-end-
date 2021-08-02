import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminactivepageComponent } from './adminactivepage.component';

describe('AdminactivepageComponent', () => {
  let component: AdminactivepageComponent;
  let fixture: ComponentFixture<AdminactivepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminactivepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminactivepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
