import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincreatediscountComponent } from './admincreatediscount.component';

describe('AdmincreatediscountComponent', () => {
  let component: AdmincreatediscountComponent;
  let fixture: ComponentFixture<AdmincreatediscountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmincreatediscountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincreatediscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
