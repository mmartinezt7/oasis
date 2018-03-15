export class BuscarDispensador {
    trm: string; // id de dispensador
    ip_address: string;
    td: string;  // id tipo de dispensador
    gtd: string; // Glosa tipo de dispensador
    ide: string; // ID de estacion
    ub: string;  // ID de ubicacion
    cm: string;  // COMUNA
    ci: string;  // CIUDAD
    pa: string;  // CHILE
    fh: string;  // AAAA-MM-DD de habilitacion
    fm: string;  // AAAA-MM-DD de mantencion
    cnd: string; // 500 cantidad de dispensacion
    stk: string; // 0 <--- stock envases disponibles (en haber)
    est: string; // 0 / 1 / 2, <--- del dispensador
    ges: string; // Habilitado
    glu: string; // glosa ubicacion
    gle: string; // glosa estacion

    constructor() {
        this.trm = '';
        this.ip_address = '';
        this.td = '';
        this.gtd = '';
        this.ide = '';
        this.ub = '';
        this.cm = '';
        this.ci = '';
        this.pa = '';
        this.fh = '';
        this.fm = '';
        this.cnd = '';
        this.stk = '';
        this.est = '';
        this.ges = '';
        this.glu = '';
        this.gle = '';
    }



}
