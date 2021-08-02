import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminmailtemplateComponent } from './adminmailtemplate.component';

describe('AdminmailtemplateComponent', () => {
  let component: AdminmailtemplateComponent;
  let fixture: ComponentFixture<AdminmailtemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminmailtemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminmailtemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
