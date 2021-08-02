import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminselectthumbnailComponent } from './adminselectthumbnail.component';

describe('AdminselectthumbnailComponent', () => {
  let component: AdminselectthumbnailComponent;
  let fixture: ComponentFixture<AdminselectthumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminselectthumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminselectthumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
