import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {AppConfig} from '../app-config';

@Injectable()
export class ConfirmarClienteService {

  private _confirmarClienteEndPoint = AppConfig.API_ENDPOINT_CONFIRMAR_CLIENTE

  constructor(private _http: Http) {
  }

  public confirmarClienteService(cliente: any): Observable<Response> {
    return this._http.post(this._confirmarClienteEndPoint, {di: cliente.di, h: cliente.hash}, this.getOptions());
  }

  private getOptions() {
    const headers = new Headers({'Content-Type': 'application/json;charset=utf-8'});
    return new RequestOptions({headers: headers});
  }

}
