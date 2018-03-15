import { Injectable } from '@angular/core';
import {AppConfig} from '../app-config';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CambiarClaveService {

  private _cambiarClaveEndpoint = AppConfig.API_ENDPOINT_CAMBIAR_CLAVE

  constructor(private _http: Http) {
  }

  public cambiarClaveService(rut: any, correo: any, pass: any): Observable<Response> {
    return this._http.post(this._cambiarClaveEndpoint, {di: rut, ema: correo, pwd: pass}, this.getOptions());
  }

  private getOptions() {
    const headers = new Headers({'Content-Type': 'application/json;charset=utf-8'});
    return new RequestOptions({headers: headers});
  }

}
