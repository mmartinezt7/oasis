/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PageSolicitarNuevaClaveComponent } from './page-solicitar-nueva-clave.component';

describe('PageSolicitarNuevaClaveComponent', () => {
  let component: PageSolicitarNuevaClaveComponent;
  let fixture: ComponentFixture<PageSolicitarNuevaClaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSolicitarNuevaClaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSolicitarNuevaClaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
