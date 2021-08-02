import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddImagesPagesComponent } from './admin-add-images-pages.component';

describe('AdminAddImagesPagesComponent', () => {
  let component: AdminAddImagesPagesComponent;
  let fixture: ComponentFixture<AdminAddImagesPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddImagesPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddImagesPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
