import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewmailtemplateComponent } from './adminviewmailtemplate.component';

describe('AdminviewmailtemplateComponent', () => {
  let component: AdminviewmailtemplateComponent;
  let fixture: ComponentFixture<AdminviewmailtemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminviewmailtemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminviewmailtemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
