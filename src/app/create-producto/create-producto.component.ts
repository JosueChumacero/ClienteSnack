import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../producto/producto.service';
import { CategoriaModel } from '../modelo/categoria.model';
import { Observable } from 'rxjs';
import { TipoProductoModel } from '../modelo/tipoproducto.model';

@Component({
  selector: 'app-create-producto',
  templateUrl: './create-producto.component.html',
  styleUrls: ['./create-producto.component.css'],
  providers: [ProductoService]
})
export class CreateProductoComponent implements OnInit {

  private categorias: Array<CategoriaModel>;
  private tipoProductos: Array<TipoProductoModel>;
  private selectedOption: number;

  constructor(private productoServicio: ProductoService) { }

  ngOnInit() {
    this.loadCategoria();
  }

  private loadCategoria(): void {
    this.productoServicio.getCategorias().subscribe(res => {
      this.categorias = res;
    });
  }
  private loadTipoProductos(selectedOption: number): void {
    this.productoServicio.getTipoProductoPorCategoria(selectedOption).subscribe(res => {
      this.tipoProductos = res;
    });
  }

  private cargarTipoProducto(): void {
    this.loadTipoProductos(this.selectedOption);
  }
}
