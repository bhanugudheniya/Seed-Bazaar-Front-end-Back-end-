import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageBannerImageComponent } from './homepage-banner-image.component';

describe('HomepageBannerImageComponent', () => {
  let component: HomepageBannerImageComponent;
  let fixture: ComponentFixture<HomepageBannerImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageBannerImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageBannerImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
