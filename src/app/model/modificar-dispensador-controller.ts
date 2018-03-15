export class ModificarDispensadorController {
    idd: string; // "ID dispensador",
    td: number; // 0 / 1, <--- tipo dispensador
    ide: number; // xxx, <-- codigo estacion
    ub: number; // xxx, <--- codigo ubicacion
    ip: string; // "xxx.xxx.xxx.xxx", <--- direccion IP
    cm: string; // "Santiago", <--- comuna
    ci: string; // "Santiago", <--- ciudad
    pa: string; // "Chile", <--- pais
    est: number; // 0 / 1 / 2, <--- estado dispensador
    fh: string; // "AAAA-MM-DD" <--- fecha habilitacion
    fm: string; // "AAAA-MM-DD" / null <--- fecha de mantencion
    stk: number; // XXXX <--- stock disponible
    amd: number; // 0 <--- cantidad de dispensacion

    constructor(
            idd: string,
            td: number,
            ide: number,
            ub: number,
            ip: string,
            cm: string,
            ci: string,
            pa: string,
            est: number,
            fh: string,
            fm: string,
            stk: number,
            amd: number
        ) {
        this.idd = idd;
        this.td = td;
        this.ide = ide;
        this.ub = ub;
        this.ip = ip;
        this.cm = cm;
        this.ci = ci;
        this.pa = pa;
        this.est = est;
        this.fh = fh;
        this.fm = fm;
        this.stk = stk;
        this.amd = amd;
    }
}
