import { TestBed } from '@angular/core/testing';

import { AdminComercioAfiService } from './admin-comercio-afi.service';

describe('AdminComercioAfiService', () => {
  let service: AdminComercioAfiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminComercioAfiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
