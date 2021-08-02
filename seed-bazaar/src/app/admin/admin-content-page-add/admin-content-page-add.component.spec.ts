import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminContentPageAddComponent } from './admin-content-page-add.component';

describe('AdminContentPageAddComponent', () => {
  let component: AdminContentPageAddComponent;
  let fixture: ComponentFixture<AdminContentPageAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminContentPageAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminContentPageAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
