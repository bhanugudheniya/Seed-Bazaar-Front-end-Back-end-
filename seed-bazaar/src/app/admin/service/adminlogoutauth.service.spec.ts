import { TestBed } from '@angular/core/testing';

import { AdminlogoutauthService } from './adminlogoutauth.service';

describe('AdminlogoutauthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminlogoutauthService = TestBed.get(AdminlogoutauthService);
    expect(service).toBeTruthy();
  });
});
