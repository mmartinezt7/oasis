import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Headers, RequestOptions, Response, Http} from '@angular/http';
import { AppConfig } from '../app-config';

@Injectable()
export class CrearClienteService {

  private _crearClienteEndPoint = AppConfig.API_ENDPOINT_CREAR_CLIENTE;

  constructor(private _http: Http) {
  }

  public crearClienteService(cliente: any): Observable<Response> {
    return this._http.post(this._crearClienteEndPoint, cliente, this.getOptions());
  }

  private getOptions() {
    const headers = new Headers({'Content-Type': 'application/json;charset=utf-8'});
    return new RequestOptions({headers: headers});
  }
}
