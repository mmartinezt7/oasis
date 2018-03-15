/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ModificarDispensadorService } from './modificar-dispensador.service';

describe('ModificarDispensadorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModificarDispensadorService]
    });
  });

  it('should ...', inject([ModificarDispensadorService], (service: ModificarDispensadorService) => {
    expect(service).toBeTruthy();
  }));
});
