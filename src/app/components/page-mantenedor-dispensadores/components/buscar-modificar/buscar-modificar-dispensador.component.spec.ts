/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {BuscarModificarDispensadorComponent} from './buscar-modificar-dispensador.component';

describe('BuscarModificarComponent', () => {
  let component: BuscarModificarDispensadorComponent;
  let fixture: ComponentFixture<BuscarModificarDispensadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarModificarDispensadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarModificarDispensadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
