import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {AppConfig} from '../../app-config';
import {Observable} from 'rxjs/Observable';
import {CrearDispensadorController} from '../../model/crear-dispensador-controller';

@Injectable()
export class CrearDispensadorService {
    private _crearDispensadorEndPoint = AppConfig.API_ENDPOINT_CREAR_DISPENSADOR;
    constructor(private _http: Http) { }
    public crearDispensadorService(consulta: CrearDispensadorController): Observable<Response> {
        return this._http.post(this._crearDispensadorEndPoint, consulta, this.getOptions());
    }
    private getOptions() {
        const headers = new Headers({'Content-Type': 'application/json;charset=utf-8'});
        return new RequestOptions({headers: headers});
    }
}
