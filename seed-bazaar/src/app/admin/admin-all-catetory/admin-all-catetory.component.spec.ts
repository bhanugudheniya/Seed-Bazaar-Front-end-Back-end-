import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAllCatetoryComponent } from './admin-all-catetory.component';

describe('AdminAllCatetoryComponent', () => {
  let component: AdminAllCatetoryComponent;
  let fixture: ComponentFixture<AdminAllCatetoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAllCatetoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAllCatetoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
