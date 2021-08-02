import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincreatecategoryComponent } from './admincreatecategory.component';

describe('AdmincreatecategoryComponent', () => {
  let component: AdmincreatecategoryComponent;
  let fixture: ComponentFixture<AdmincreatecategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmincreatecategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincreatecategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
