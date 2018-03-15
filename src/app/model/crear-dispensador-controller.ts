export class CrearDispensadorController {

    idd: string; // ID dispensador
    td: number; // 0 / 1, <--- tipo dispensador
    ide: number; // xxx, <-- codigo estacion
    ub: number; // xxx, <--- codigo ubicacion
    ip: string; // "xxx.xxx.xxx.xxx", <--- direccion IP
    cm: string; // "Santiago", <--- comuna
    ci: string; // "Santiago", <--- ciudad
    pa: string; // "Chile", <--- pais

    constructor(idd: string, td: number, ide: number, ub: number, ip: string, cm: string, ci: string, pa: string) {
        this.idd = idd;
        this.td = td;
        this.ide = ide;
        this.ub = ub;
        this.ip = ip;
        this.cm = cm;
        this.ci = ci;
        this.pa = pa;
    }}


