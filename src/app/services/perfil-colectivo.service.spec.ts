import { TestBed } from '@angular/core/testing';

import { PerfilColectivoService } from './perfil-colectivo.service';

describe('PerfilColectivoService', () => {
  let service: PerfilColectivoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerfilColectivoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
