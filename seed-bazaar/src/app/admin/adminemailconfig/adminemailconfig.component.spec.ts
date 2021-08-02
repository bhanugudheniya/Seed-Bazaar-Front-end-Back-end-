import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminemailconfigComponent } from './adminemailconfig.component';

describe('AdminemailconfigComponent', () => {
  let component: AdminemailconfigComponent;
  let fixture: ComponentFixture<AdminemailconfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminemailconfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminemailconfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
