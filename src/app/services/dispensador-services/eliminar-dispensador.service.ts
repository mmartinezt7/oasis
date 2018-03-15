import { Injectable } from '@angular/core';
import {AppConfig} from '../../app-config';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {BuscarDispensadorController} from '../../model/buscar-dispensador-controller';

@Injectable()
export class EliminarDispensadorService {
    private _eliminarDispensadorEndPoint = AppConfig.API_ENDPOINT_ELIMINAR_DISPENSADOR;

    constructor(private _http: Http) { }
    public eliminarDispensadorService(consulta: BuscarDispensadorController): Observable<Response> {
        return this._http.post(this._eliminarDispensadorEndPoint, consulta, this.getOptions());
    }
    private getOptions() {
        const headers = new Headers({'Content-Type': 'application/json;charset=utf-8'});
        return new RequestOptions({headers: headers});
    }

}
