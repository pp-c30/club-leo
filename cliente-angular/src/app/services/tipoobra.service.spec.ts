import { TestBed } from '@angular/core/testing';

import { TipoobraService } from './tipoobra.service';

describe('TipoobraService', () => {
  let service: TipoobraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoobraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
