import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsetmessageorderstatusComponent } from './adminsetmessageorderstatus.component';

describe('AdminsetmessageorderstatusComponent', () => {
  let component: AdminsetmessageorderstatusComponent;
  let fixture: ComponentFixture<AdminsetmessageorderstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminsetmessageorderstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminsetmessageorderstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
