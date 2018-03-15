import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {AppConfig} from '../../app-config';
import {Observable} from 'rxjs/Observable';
import {ModificarDispensadorController} from '../../model/modificar-dispensador-controller';

@Injectable()
export class ModificarDispensadorService {
    private _modificarDispensadorEndPoint = AppConfig.API_ENDPOINT_MODIFICAR_DISPENSADOR;
    constructor(private _http: Http) { }
    public modificarDispensadorService(obj: ModificarDispensadorController): Observable<Response> {
        return this._http.post(this._modificarDispensadorEndPoint, obj, this.getOptions());
    }
    private getOptions() {
        const headers = new Headers({'Content-Type': 'application/json;charset=utf-8'});
        return new RequestOptions({headers: headers});
    }
}
