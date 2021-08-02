import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincategorychangeseoComponent } from './admincategorychangeseo.component';

describe('AdmincategorychangeseoComponent', () => {
  let component: AdmincategorychangeseoComponent;
  let fixture: ComponentFixture<AdmincategorychangeseoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmincategorychangeseoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincategorychangeseoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
