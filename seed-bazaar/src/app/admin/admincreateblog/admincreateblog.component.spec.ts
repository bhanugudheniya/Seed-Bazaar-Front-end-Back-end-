import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincreateblogComponent } from './admincreateblog.component';

describe('AdmincreateblogComponent', () => {
  let component: AdmincreateblogComponent;
  let fixture: ComponentFixture<AdmincreateblogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmincreateblogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincreateblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
