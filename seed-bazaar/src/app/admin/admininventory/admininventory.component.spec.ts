import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmininventoryComponent } from './admininventory.component';

describe('AdmininventoryComponent', () => {
  let component: AdmininventoryComponent;
  let fixture: ComponentFixture<AdmininventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmininventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmininventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
