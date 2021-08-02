import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminchangeseoComponent } from './adminchangeseo.component';

describe('AdminchangeseoComponent', () => {
  let component: AdminchangeseoComponent;
  let fixture: ComponentFixture<AdminchangeseoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminchangeseoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminchangeseoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
