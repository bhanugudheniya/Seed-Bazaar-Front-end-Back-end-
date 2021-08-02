import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincategorymetataginputComponent } from './admincategorymetataginput.component';

describe('AdmincategorymetataginputComponent', () => {
  let component: AdmincategorymetataginputComponent;
  let fixture: ComponentFixture<AdmincategorymetataginputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmincategorymetataginputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincategorymetataginputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
