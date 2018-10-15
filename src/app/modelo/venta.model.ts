import { DetalleVentaModel } from './detalleventa.model';


export class VentaModel {
    public idVenta: number;
    public total: number;
    public nombre: string;
    public fecha: Date;
    public estado: string;
    public detalleVentaList: Array<DetalleVentaModel>;

    constructor() {
        this.detalleVentaList = new Array<DetalleVentaModel>();
    }
}
