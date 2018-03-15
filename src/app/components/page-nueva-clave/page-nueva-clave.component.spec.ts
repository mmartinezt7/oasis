/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PageNuevaClaveComponent } from './page-nueva-clave.component';

describe('PageNuevaClaveComponent', () => {
  let component: PageNuevaClaveComponent;
  let fixture: ComponentFixture<PageNuevaClaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNuevaClaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNuevaClaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
