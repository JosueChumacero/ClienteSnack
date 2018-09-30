import { CategoriaModel } from './categoria.model';

export class TipoProductoModel {
    public idTipoproducto: number;
    public descripcion: string;
    public idCategoria: CategoriaModel;

    constructor() {
        this.idCategoria = new CategoriaModel();
    }
}
