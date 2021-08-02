import { TestBed } from '@angular/core/testing';

import { HomepageBannerService } from './homepage-banner.service';

describe('HomepageBannerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomepageBannerService = TestBed.get(HomepageBannerService);
    expect(service).toBeTruthy();
  });
});
