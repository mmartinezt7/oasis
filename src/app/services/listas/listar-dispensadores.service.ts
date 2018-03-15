import { Injectable } from '@angular/core';
import {AppConfig} from '../../app-config';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ListarDispensadoresService {
    private _listarDispensadoresEndPoint = AppConfig.API_ENDPOINT_LISTAR_DISPENSADORES;
    constructor(private _http: Http) { }

    public listarTiposDispensadoresService(): Observable<Response> {
        return this._http.get(this._listarDispensadoresEndPoint, this.getOptions());
    }

    private getOptions() {
        const headers = new Headers({'Content-Type': 'application/json;charset=utf-8'});
        return new RequestOptions({headers: headers});
    }

}
