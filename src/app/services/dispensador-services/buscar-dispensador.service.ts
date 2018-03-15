import { Injectable } from '@angular/core';
import {AppConfig} from '../../app-config';
import {Observable} from 'rxjs/Observable';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {BuscarDispensadorController} from '../../model/buscar-dispensador-controller';

@Injectable()
export class BuscarDispensadorService {
    private _buscarDispensadorEndPoint = AppConfig.API_ENDPOINT_BUSCAR_DISPENSADOR;
    constructor(private _http: Http) { }
    public buscarDispensadorService(consulta: BuscarDispensadorController): Observable<Response> {
        return this._http.post(this._buscarDispensadorEndPoint, consulta, this.getOptions());
    }

  public _buscarDispensadorService(): Observable<Response> {
    return this._http.post(this._buscarDispensadorEndPoint, {trm: ''}, this.getOptions());
  }

    private getOptions() {
        const headers = new Headers({'Content-Type': 'application/json;charset=utf-8'});
        return new RequestOptions({headers: headers});
    }
}
