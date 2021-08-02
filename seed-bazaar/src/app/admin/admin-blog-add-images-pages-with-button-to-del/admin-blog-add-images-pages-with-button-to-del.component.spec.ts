import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBlogAddImagesPagesWithButtonToDelComponent } from './admin-blog-add-images-pages-with-button-to-del.component';

describe('AdminBlogAddImagesPagesWithButtonToDelComponent', () => {
  let component: AdminBlogAddImagesPagesWithButtonToDelComponent;
  let fixture: ComponentFixture<AdminBlogAddImagesPagesWithButtonToDelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBlogAddImagesPagesWithButtonToDelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBlogAddImagesPagesWithButtonToDelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
