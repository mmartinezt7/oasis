/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CambiarClaveService } from './cambiar-clave.service';

describe('CambiarClaveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CambiarClaveService]
    });
  });

  it('should ...', inject([CambiarClaveService], (service: CambiarClaveService) => {
    expect(service).toBeTruthy();
  }));
});
