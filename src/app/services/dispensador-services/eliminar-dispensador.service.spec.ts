/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EliminarDispensadorService } from './eliminar-dispensador.service';

describe('EliminarDispensadorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EliminarDispensadorService]
    });
  });

  it('should ...', inject([EliminarDispensadorService], (service: EliminarDispensadorService) => {
    expect(service).toBeTruthy();
  }));
});
