import { Injectable } from '@angular/core';
import {AppConfig} from '../app-config';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class EliminarClienteService {

  private _eliminarClienteEndPoint = AppConfig.API_ENDPOINT_ELIMINAR_CLIENTE;
  constructor( private _http: Http ) { }

  public eliminarClienteService(cliente: any): Observable<Response> {
      return this._http.post(this._eliminarClienteEndPoint, cliente, this.getOptions());
  }
  private getOptions() {
      const headers = new Headers({'Content-Type': 'application/json;charset=utf-8'});
      return new RequestOptions({headers: headers});
  }
}
