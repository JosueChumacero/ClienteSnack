import { Component, OnInit } from '@angular/core';
import { CategoriaModel } from '../../modelo/categoria.model';
import { TipoProductoModel } from '../../modelo/tipoproducto.model';
import { ProductoService } from '../../producto/producto.service';

@Component({
  selector: 'app-create-tipoproducto',
  templateUrl: './create-tipoproducto.component.html',
  styleUrls: ['./create-tipoproducto.component.css']
})
export class CreateTipoproductoComponent implements OnInit {

  private categorias: Array<CategoriaModel>;
  private tipoProducto = new TipoProductoModel();
  private isValid = true;
  private mensage: string;
  constructor(private productoServicio: ProductoService) { }

  ngOnInit() {
    this.loadCategoria();
  }

  private loadCategoria(): void {
    this.productoServicio.getCategorias().subscribe(res => {
      this.categorias = res;
    });
  }

}
