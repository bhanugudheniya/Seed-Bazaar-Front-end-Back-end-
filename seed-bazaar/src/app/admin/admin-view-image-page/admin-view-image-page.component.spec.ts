import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewImagePageComponent } from './admin-view-image-page.component';

describe('AdminViewImagePageComponent', () => {
  let component: AdminViewImagePageComponent;
  let fixture: ComponentFixture<AdminViewImagePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminViewImagePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewImagePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
