import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBlogSeoOptionWithUrlAndInputComponent } from './admin-blog-seo-option-with-url-and-input.component';

describe('AdminBlogSeoOptionWithUrlAndInputComponent', () => {
  let component: AdminBlogSeoOptionWithUrlAndInputComponent;
  let fixture: ComponentFixture<AdminBlogSeoOptionWithUrlAndInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBlogSeoOptionWithUrlAndInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBlogSeoOptionWithUrlAndInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
