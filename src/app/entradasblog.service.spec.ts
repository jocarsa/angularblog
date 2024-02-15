import { TestBed } from '@angular/core/testing';

import { EntradasblogService } from './entradasblog.service';

describe('EntradasblogService', () => {
  let service: EntradasblogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntradasblogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
