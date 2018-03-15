/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CrearClienteService } from './crear-cliente.service';

describe('CrearClienteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrearClienteService]
    });
  });

  it('should ...', inject([CrearClienteService], (service: CrearClienteService) => {
    expect(service).toBeTruthy();
  }));
});
