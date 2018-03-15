/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ModificarClienteService } from './modificar-cliente.service';

describe('ModificarClienteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModificarClienteService]
    });
  });

  it('should ...', inject([ModificarClienteService], (service: ModificarClienteService) => {
    expect(service).toBeTruthy();
  }));
});
