import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminexportcustomerpageComponent } from './adminexportcustomerpage.component';

describe('AdminexportcustomerpageComponent', () => {
  let component: AdminexportcustomerpageComponent;
  let fixture: ComponentFixture<AdminexportcustomerpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminexportcustomerpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminexportcustomerpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
