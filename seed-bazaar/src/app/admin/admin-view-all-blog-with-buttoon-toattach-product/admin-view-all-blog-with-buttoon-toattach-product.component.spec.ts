import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewAllBlogWithButtoonToattachProductComponent } from './admin-view-all-blog-with-buttoon-toattach-product.component';

describe('AdminViewAllBlogWithButtoonToattachProductComponent', () => {
  let component: AdminViewAllBlogWithButtoonToattachProductComponent;
  let fixture: ComponentFixture<AdminViewAllBlogWithButtoonToattachProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminViewAllBlogWithButtoonToattachProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewAllBlogWithButtoonToattachProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
