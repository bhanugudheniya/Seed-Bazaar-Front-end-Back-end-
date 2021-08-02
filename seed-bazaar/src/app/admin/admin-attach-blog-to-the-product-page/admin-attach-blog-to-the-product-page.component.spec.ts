import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAttachBlogToTheProductPageComponent } from './admin-attach-blog-to-the-product-page.component';

describe('AdminAttachBlogToTheProductPageComponent', () => {
  let component: AdminAttachBlogToTheProductPageComponent;
  let fixture: ComponentFixture<AdminAttachBlogToTheProductPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAttachBlogToTheProductPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAttachBlogToTheProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
