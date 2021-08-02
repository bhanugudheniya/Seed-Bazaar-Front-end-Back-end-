import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewAllContentPageComponent } from './admin-view-all-content-page.component';

describe('AdminViewAllContentPageComponent', () => {
  let component: AdminViewAllContentPageComponent;
  let fixture: ComponentFixture<AdminViewAllContentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminViewAllContentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewAllContentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
