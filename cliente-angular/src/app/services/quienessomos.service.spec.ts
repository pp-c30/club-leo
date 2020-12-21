import { TestBed } from '@angular/core/testing';

import { QuienessomosService } from './quienessomos.service';

describe('QuienessomosService', () => {
  let service: QuienessomosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuienessomosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
