import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddImagePageComponent } from './admin-add-image-page.component';

describe('AdminAddImagePageComponent', () => {
  let component: AdminAddImagePageComponent;
  let fixture: ComponentFixture<AdminAddImagePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddImagePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddImagePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
