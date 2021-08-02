import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBlogPageWithButtonsComponent } from './admin-blog-page-with-buttons.component';

describe('AdminBlogPageWithButtonsComponent', () => {
  let component: AdminBlogPageWithButtonsComponent;
  let fixture: ComponentFixture<AdminBlogPageWithButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBlogPageWithButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBlogPageWithButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
