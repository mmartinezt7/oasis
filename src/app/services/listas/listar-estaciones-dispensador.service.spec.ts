/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ListarEstacionesDispensadorService } from './listar-estaciones-dispensador.service';

describe('ListarEstacionesDispensadorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListarEstacionesDispensadorService]
    });
  });

  it('should ...', inject([ListarEstacionesDispensadorService], (service: ListarEstacionesDispensadorService) => {
    expect(service).toBeTruthy();
  }));
});
