/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BuscarEnvaseClienteService } from './buscar-envase-cliente.service';

describe('BuscarEnvaseClienteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuscarEnvaseClienteService]
    });
  });

  it('should ...', inject([BuscarEnvaseClienteService], (service: BuscarEnvaseClienteService) => {
    expect(service).toBeTruthy();
  }));
});
