import { TipoProductoModel } from './tipoproducto.model';

export class ProductoModel {
    public idProducto: number;
    public descripcion: string;
    public precio: number;
    public estado: number;
    public idTipoproducto: TipoProductoModel;
}
