/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BuscarDispensadorService } from './buscar-dispensador.service';

describe('BuscarDispensadorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuscarDispensadorService]
    });
  });

  it('should ...', inject([BuscarDispensadorService], (service: BuscarDispensadorService) => {
    expect(service).toBeTruthy();
  }));
});
