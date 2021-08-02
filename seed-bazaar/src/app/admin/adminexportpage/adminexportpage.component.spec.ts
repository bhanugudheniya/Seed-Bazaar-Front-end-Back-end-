import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminexportpageComponent } from './adminexportpage.component';

describe('AdminexportpageComponent', () => {
  let component: AdminexportpageComponent;
  let fixture: ComponentFixture<AdminexportpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminexportpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminexportpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
