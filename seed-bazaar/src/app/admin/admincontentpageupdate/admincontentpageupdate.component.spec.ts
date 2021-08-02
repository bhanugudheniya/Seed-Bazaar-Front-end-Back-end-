import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincontentpageupdateComponent } from './admincontentpageupdate.component';

describe('AdmincontentpageupdateComponent', () => {
  let component: AdmincontentpageupdateComponent;
  let fixture: ComponentFixture<AdmincontentpageupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmincontentpageupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincontentpageupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
