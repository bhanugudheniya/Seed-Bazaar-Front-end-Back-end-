import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminaddimageComponent } from './adminaddimage.component';

describe('AdminaddimageComponent', () => {
  let component: AdminaddimageComponent;
  let fixture: ComponentFixture<AdminaddimageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminaddimageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminaddimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
