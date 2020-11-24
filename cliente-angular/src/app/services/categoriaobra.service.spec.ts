import { TestBed } from '@angular/core/testing';

import { CategoriaobraService } from './categoriaobra.service';

describe('CategoriaobraService', () => {
  let service: CategoriaobraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriaobraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
