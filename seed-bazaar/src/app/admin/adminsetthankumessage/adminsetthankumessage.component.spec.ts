import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsetthankumessageComponent } from './adminsetthankumessage.component';

describe('AdminsetthankumessageComponent', () => {
  let component: AdminsetthankumessageComponent;
  let fixture: ComponentFixture<AdminsetthankumessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminsetthankumessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminsetthankumessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
