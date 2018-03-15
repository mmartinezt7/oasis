import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {AppConfig} from '../../app-config';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ListarUbicacionesService {
    private _listarUbicacionesEndPoint = AppConfig.API_ENDPOINT_LISTAR_UBICACIONES;
    constructor(private _http: Http) { }

    public listarUbicacionesService(): Observable<Response> {
        return this._http.get(this._listarUbicacionesEndPoint, this.getOptions());
    }

    private getOptions() {
        const headers = new Headers({'Content-Type': 'application/json;charset=utf-8'});
        return new RequestOptions({headers: headers});
    }

}
