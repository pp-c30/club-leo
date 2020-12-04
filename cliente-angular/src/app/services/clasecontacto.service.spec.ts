import { TestBed } from '@angular/core/testing';

import { ClasecontactoService } from './clasecontacto.service';

describe('ClasecontactoService', () => {
  let service: ClasecontactoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClasecontactoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
