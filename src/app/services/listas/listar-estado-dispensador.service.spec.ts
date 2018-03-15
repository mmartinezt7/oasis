/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ListarEstadoDispensadorService } from './listar-estado-dispensador.service';

describe('ListarEstadoDispensadorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListarEstadoDispensadorService]
    });
  });

  it('should ...', inject([ListarEstadoDispensadorService], (service: ListarEstadoDispensadorService) => {
    expect(service).toBeTruthy();
  }));
});
