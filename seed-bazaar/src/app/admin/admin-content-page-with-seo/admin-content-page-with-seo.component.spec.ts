import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminContentPageWithSeoComponent } from './admin-content-page-with-seo.component';

describe('AdminContentPageWithSeoComponent', () => {
  let component: AdminContentPageWithSeoComponent;
  let fixture: ComponentFixture<AdminContentPageWithSeoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminContentPageWithSeoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminContentPageWithSeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
