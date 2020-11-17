import { TestBed } from '@angular/core/testing';

import { CategoriaPrincipalService } from './categoria-principal.service';

describe('CategoriaPrincipalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoriaPrincipalService = TestBed.get(CategoriaPrincipalService);
    expect(service).toBeTruthy();
  });
});
