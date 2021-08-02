import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBlogViewDetailToApproveOrNotComponent } from './admin-blog-view-detail-to-approve-or-not.component';

describe('AdminBlogViewDetailToApproveOrNotComponent', () => {
  let component: AdminBlogViewDetailToApproveOrNotComponent;
  let fixture: ComponentFixture<AdminBlogViewDetailToApproveOrNotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBlogViewDetailToApproveOrNotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBlogViewDetailToApproveOrNotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
