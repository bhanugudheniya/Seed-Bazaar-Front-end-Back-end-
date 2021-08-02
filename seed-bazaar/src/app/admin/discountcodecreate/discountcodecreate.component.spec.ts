import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountcodecreateComponent } from './discountcodecreate.component';

describe('DiscountcodecreateComponent', () => {
  let component: DiscountcodecreateComponent;
  let fixture: ComponentFixture<DiscountcodecreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscountcodecreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscountcodecreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
