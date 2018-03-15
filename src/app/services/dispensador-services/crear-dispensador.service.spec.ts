/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CrearDispensadorService } from './crear-dispensador.service';

describe('CrearDispensadorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrearDispensadorService]
    });
  });

  it('should ...', inject([CrearDispensadorService], (service: CrearDispensadorService) => {
    expect(service).toBeTruthy();
  }));
});
