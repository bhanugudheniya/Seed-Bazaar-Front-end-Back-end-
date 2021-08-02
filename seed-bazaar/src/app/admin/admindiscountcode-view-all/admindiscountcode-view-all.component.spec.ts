import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindiscountcodeViewAllComponent } from './admindiscountcode-view-all.component';

describe('AdmindiscountcodeViewAllComponent', () => {
  let component: AdmindiscountcodeViewAllComponent;
  let fixture: ComponentFixture<AdmindiscountcodeViewAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmindiscountcodeViewAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmindiscountcodeViewAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
