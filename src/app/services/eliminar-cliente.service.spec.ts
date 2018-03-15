/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EliminarClienteService } from './eliminar-cliente.service';

describe('EliminarClienteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EliminarClienteService]
    });
  });

  it('should ...', inject([EliminarClienteService], (service: EliminarClienteService) => {
    expect(service).toBeTruthy();
  }));
});
