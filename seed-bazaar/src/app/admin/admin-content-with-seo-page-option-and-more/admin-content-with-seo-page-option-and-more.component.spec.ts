import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminContentWithSeoPageOptionAndMoreComponent } from './admin-content-with-seo-page-option-and-more.component';

describe('AdminContentWithSeoPageOptionAndMoreComponent', () => {
  let component: AdminContentWithSeoPageOptionAndMoreComponent;
  let fixture: ComponentFixture<AdminContentWithSeoPageOptionAndMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminContentWithSeoPageOptionAndMoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminContentWithSeoPageOptionAndMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
