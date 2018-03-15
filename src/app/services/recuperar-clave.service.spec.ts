/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RecuperarClaveService } from './recuperar-clave.service';

describe('RecuperarClaveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecuperarClaveService]
    });
  });

  it('should ...', inject([RecuperarClaveService], (service: RecuperarClaveService) => {
    expect(service).toBeTruthy();
  }));
});
