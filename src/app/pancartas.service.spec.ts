import { TestBed } from '@angular/core/testing';

import { PancartasService } from './pancartas.service';

describe('PancartasService', () => {
  let service: PancartasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PancartasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
