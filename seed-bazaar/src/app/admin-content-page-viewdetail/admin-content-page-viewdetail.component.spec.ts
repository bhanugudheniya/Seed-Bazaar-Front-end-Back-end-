import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminContentPageViewdetailComponent } from './admin-content-page-viewdetail.component';

describe('AdminContentPageViewdetailComponent', () => {
  let component: AdminContentPageViewdetailComponent;
  let fixture: ComponentFixture<AdminContentPageViewdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminContentPageViewdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminContentPageViewdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
