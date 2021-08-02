import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageMobileBannerComponent } from './homepage-mobile-banner.component';

describe('HomepageMobileBannerComponent', () => {
  let component: HomepageMobileBannerComponent;
  let fixture: ComponentFixture<HomepageMobileBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageMobileBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageMobileBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
