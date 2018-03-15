/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ListarDispensadoresService } from './listar-dispensadores.service';

describe('ListarDispensadoresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListarDispensadoresService]
    });
  });

  it('should ...', inject([ListarDispensadoresService], (service: ListarDispensadoresService) => {
    expect(service).toBeTruthy();
  }));
});
