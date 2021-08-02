import { TestBed } from '@angular/core/testing';

import { HomepageMobileBannerService } from './homepage-mobile-banner.service';

describe('HomepageMobileBannerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomepageMobileBannerService = TestBed.get(HomepageMobileBannerService);
    expect(service).toBeTruthy();
  });
});
