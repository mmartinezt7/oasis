export class ModificarEnvaseController {

    env: string; // "ID Envase",
    trm: string; // "ID Dispensador",
    cli: string; // "ID de cliente", <-- Ojo es el id de cliente, no el docum de ident.
    fh: string; // "AAAA-MM-DD", <--- fecha de habilitacion
    fv: string; // "AAAA-MM-DD", <--- fecha de vigencia
    est: number; // 0 / 1 / 2 / 3, <--- estado del envase
    ccm: number; // 500 <--- consumo acumulado (en cc)


    constructor(env: string, trm: string, cli: string, fh: string, fv: string, est: number, ccm: number) {
        this.env = env;
        this.trm = trm;
        this.cli = cli;
        this.fh = fh;
        this.fv = fv;
        this.est = est;
        this.ccm = ccm;
    }
}



