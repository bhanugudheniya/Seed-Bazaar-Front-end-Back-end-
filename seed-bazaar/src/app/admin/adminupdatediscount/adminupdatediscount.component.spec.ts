import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminupdatediscountComponent } from './adminupdatediscount.component';

describe('AdminupdatediscountComponent', () => {
  let component: AdminupdatediscountComponent;
  let fixture: ComponentFixture<AdminupdatediscountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminupdatediscountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminupdatediscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
