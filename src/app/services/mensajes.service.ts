import { Injectable } from '@angular/core';
import {ToastyService} from 'ng2-toasty';

@Injectable()
export class MensajesService {

  constructor(private toastyService: ToastyService) { }

    showError(titulo: string, mensaje: string) {
        this.toastyService.error({
            title: titulo,
            msg: mensaje,
            showClose: true,
            timeout: 10000,
            theme: 'bootstrap'
        });
    }
    showInfo(titulo: string, mensaje: string) {
        this.toastyService.info({
            title: titulo,
            msg: mensaje,
            showClose: true,
            timeout: 5000,
            theme: 'bootstrap'
        });
    }
    showSuccess(titulo: string, mensaje: string) {
        this.toastyService.success({
            title: titulo,
            msg: mensaje,
            showClose: true,
            timeout: 5000,
            theme: 'bootstrap'
        });
    }
    showWait(titulo: string, mensaje: string) {
        this.toastyService.wait({
            title: titulo,
            msg: mensaje,
            showClose: true,
            timeout: 5000,
            theme: 'bootstrap'
        });
    }
    showWarning(titulo: string, mensaje: string) {
        this.toastyService.warning({
            title: titulo,
            msg: mensaje,
            showClose: true,
            timeout: 5000,
            theme: 'bootstrap'
        });
    }
}
