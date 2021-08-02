import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindropdownpageComponent } from './admindropdownpage.component';

describe('AdmindropdownpageComponent', () => {
  let component: AdmindropdownpageComponent;
  let fixture: ComponentFixture<AdmindropdownpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmindropdownpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmindropdownpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
