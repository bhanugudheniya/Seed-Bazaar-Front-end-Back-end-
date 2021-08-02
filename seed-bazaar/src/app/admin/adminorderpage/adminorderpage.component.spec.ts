import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminorderpageComponent } from './adminorderpage.component';

describe('AdminorderpageComponent', () => {
  let component: AdminorderpageComponent;
  let fixture: ComponentFixture<AdminorderpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminorderpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminorderpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
