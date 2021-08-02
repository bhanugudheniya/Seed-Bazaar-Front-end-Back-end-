import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewAllBlogWithSeoButtonComponent } from './admin-view-all-blog-with-seo-button.component';

describe('AdminViewAllBlogWithSeoButtonComponent', () => {
  let component: AdminViewAllBlogWithSeoButtonComponent;
  let fixture: ComponentFixture<AdminViewAllBlogWithSeoButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminViewAllBlogWithSeoButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewAllBlogWithSeoButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
