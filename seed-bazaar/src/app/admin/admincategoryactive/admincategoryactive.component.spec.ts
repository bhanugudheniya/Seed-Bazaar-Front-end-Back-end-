import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincategoryactiveComponent } from './admincategoryactive.component';

describe('AdmincategoryactiveComponent', () => {
  let component: AdmincategoryactiveComponent;
  let fixture: ComponentFixture<AdmincategoryactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmincategoryactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincategoryactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
