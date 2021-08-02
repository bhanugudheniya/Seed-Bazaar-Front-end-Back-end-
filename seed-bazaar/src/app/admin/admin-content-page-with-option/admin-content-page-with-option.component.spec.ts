import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminContentPageWithOptionComponent } from './admin-content-page-with-option.component';

describe('AdminContentPageWithOptionComponent', () => {
  let component: AdminContentPageWithOptionComponent;
  let fixture: ComponentFixture<AdminContentPageWithOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminContentPageWithOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminContentPageWithOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
