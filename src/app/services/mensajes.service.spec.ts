/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MensajesService } from './mensajes.service';

describe('MensajesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MensajesService]
    });
  });

  it('should ...', inject([MensajesService], (service: MensajesService) => {
    expect(service).toBeTruthy();
  }));
});
