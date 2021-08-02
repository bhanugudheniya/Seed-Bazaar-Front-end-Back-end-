import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAccountAddressComponent } from './my-account-address.component';

describe('MyAccountAddressComponent', () => {
  let component: MyAccountAddressComponent;
  let fixture: ComponentFixture<MyAccountAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAccountAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAccountAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
