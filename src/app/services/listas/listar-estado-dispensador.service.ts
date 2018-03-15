import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {AppConfig} from '../../app-config';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ListarEstadoDispensadorService {
    private _listarEstadosDispensadorEndPoint = AppConfig.API_ENDPOINT_LISTAR_ESTADO_DISPENSADOR;
    constructor(private _http: Http) { }

    public listarEstadoDispensadorService(): Observable<Response> {
        return this._http.get(this._listarEstadosDispensadorEndPoint, this.getOptions());
    }

    private getOptions() {
        const headers = new Headers({'Content-Type': 'application/json;charset=utf-8'});
        return new RequestOptions({headers: headers});
    }
}
