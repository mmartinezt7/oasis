/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PageMantenedorEnvasesComponent } from './page-mantenedor-envases.component';

describe('PageMantenedorEnvasesComponent', () => {
  let component: PageMantenedorEnvasesComponent;
  let fixture: ComponentFixture<PageMantenedorEnvasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageMantenedorEnvasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMantenedorEnvasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
