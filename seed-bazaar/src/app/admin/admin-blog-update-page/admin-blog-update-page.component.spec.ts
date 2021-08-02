import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBlogUpdatePageComponent } from './admin-blog-update-page.component';

describe('AdminBlogUpdatePageComponent', () => {
  let component: AdminBlogUpdatePageComponent;
  let fixture: ComponentFixture<AdminBlogUpdatePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBlogUpdatePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBlogUpdatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
