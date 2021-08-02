import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewpageComponent } from './adminviewpage.component';

describe('AdminviewpageComponent', () => {
  let component: AdminviewpageComponent;
  let fixture: ComponentFixture<AdminviewpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminviewpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminviewpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
