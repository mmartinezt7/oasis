/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ConfirmarClienteService } from './confirmar-cliente.service';

describe('ConfirmarClienteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfirmarClienteService]
    });
  });

  it('should ...', inject([ConfirmarClienteService], (service: ConfirmarClienteService) => {
    expect(service).toBeTruthy();
  }));
});
