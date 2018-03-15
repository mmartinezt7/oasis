import { Injectable } from '@angular/core';
import {AppConfig} from '../app-config';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class RecuperarClaveService {

  private _recuperarClaveEndpoint = AppConfig.API_ENDPOINT_RECUPERAR_CLAVE

  constructor(private _http: Http) {
  }

  public recuperarClaveService(email: any, rut: any, fn: any): Observable<Response> {
    return this._http.post(this._recuperarClaveEndpoint, {ema: email, di: rut, fn: fn}, this.getOptions());
  }

  private getOptions() {
    const headers = new Headers({'Content-Type': 'application/json;charset=utf-8'});
    return new RequestOptions({headers: headers});
  }


}
