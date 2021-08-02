import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminfooternavigationComponent } from './adminfooternavigation.component';

describe('AdminfooternavigationComponent', () => {
  let component: AdminfooternavigationComponent;
  let fixture: ComponentFixture<AdminfooternavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminfooternavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminfooternavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
