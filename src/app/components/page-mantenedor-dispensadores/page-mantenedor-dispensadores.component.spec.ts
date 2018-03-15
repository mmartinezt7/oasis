/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PageMantenedorDispensadoresComponent } from './page-mantenedor-dispensadores.component';

describe('PageMantenedorDispensadoresComponent', () => {
  let component: PageMantenedorDispensadoresComponent;
  let fixture: ComponentFixture<PageMantenedorDispensadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageMantenedorDispensadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMantenedorDispensadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
