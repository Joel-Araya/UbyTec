import { TestBed } from '@angular/core/testing';

import { ComercioCercanoService } from './comercio-cercano.service';

describe('ComercioCercanoService', () => {
  let service: ComercioCercanoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComercioCercanoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
