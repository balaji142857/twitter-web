import { TestBed } from '@angular/core/testing';

import { TempUsersResolveService } from './temp-users-resolve.service';

describe('TempUsersResolveService', () => {
  let service: TempUsersResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TempUsersResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
