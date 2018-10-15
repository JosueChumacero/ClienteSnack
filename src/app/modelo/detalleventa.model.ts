import { ProductoModel } from './producto.model';

export class DetalleVentaModel {
    public idProducto: ProductoModel;
    public cantidad: number;
    public estado: string;
    public precio: number;

    constructor() {
        this.idProducto = new ProductoModel();
    }
}
