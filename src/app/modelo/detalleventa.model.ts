import { ProductoModel } from './producto.model';

export class DetalleVentaModel {
    public idProducto: ProductoModel;
    public cantidad: number;
    public estado: string;

    constructor() {
        this.idProducto = new ProductoModel();
    }
}
