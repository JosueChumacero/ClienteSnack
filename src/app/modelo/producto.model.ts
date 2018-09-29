import { TipoProductoModel } from './tipoproducto.model';

export class ProductoModel {
    public idProducto: number;
    public descripcion: string;
    public precio: number;
    public estado: string;
    public idTipoproducto: TipoProductoModel;

    constructor() {
        this.idTipoproducto = new TipoProductoModel();
    }
}
