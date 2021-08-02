import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewheaderComponent } from './adminviewheader.component';

describe('AdminviewheaderComponent', () => {
  let component: AdminviewheaderComponent;
  let fixture: ComponentFixture<AdminviewheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminviewheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminviewheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
