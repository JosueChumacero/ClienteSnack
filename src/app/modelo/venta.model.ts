import { DetalleVentaModel } from './detalleventa.model';


export class VentaModel {
    public idVenta: number;
    public total: number;
    public nombre: string;
    public fecha: Date;
    public estado: string;
    public detalleVenta: Array<DetalleVentaModel>;

    constructor() {
        this.detalleVenta = new Array<DetalleVentaModel>();
    }
}
