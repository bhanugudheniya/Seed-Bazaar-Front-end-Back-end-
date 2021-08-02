import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminupdatecategoryComponent } from './adminupdatecategory.component';

describe('AdminupdatecategoryComponent', () => {
  let component: AdminupdatecategoryComponent;
  let fixture: ComponentFixture<AdminupdatecategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminupdatecategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminupdatecategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
