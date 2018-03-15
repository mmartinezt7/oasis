/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ListarUbicacionesService } from './listar-ubicaciones.service';

describe('ListarUbicacionesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListarUbicacionesService]
    });
  });

  it('should ...', inject([ListarUbicacionesService], (service: ListarUbicacionesService) => {
    expect(service).toBeTruthy();
  }));
});
