import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../producto/producto.service';
import { CategoriaModel } from '../modelo/categoria.model';
import { Observable } from 'rxjs';
import { TipoProductoModel } from '../modelo/tipoproducto.model';
import { ProductoModel } from '../modelo/producto.model';
import { OK } from '../modelo/httpstatus.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-producto',
  templateUrl: './create-producto.component.html',
  styleUrls: ['./create-producto.component.css'],
  providers: [ProductoService]
})
export class CreateProductoComponent implements OnInit {

  private categorias: Array<CategoriaModel>;
  private tipoProductos: Array<TipoProductoModel>;
  private producto = new ProductoModel();
  private selectedOption: number;
  private isValid = true;
  private mensage: string;

  constructor(private productoServicio: ProductoService, private router: Router) { }

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

  private guardarProducto(): void {
    const validar = this.productoServicio.validarProducto(this.producto);
    if (validar) {
      this.productoServicio.saveOrUpdate(this.producto).subscribe(res => {
        if (res.responseCode === OK) {
          this.router.navigate(['/productos']);
        } else {
          this.mensage = res.message;
          this.isValid = false;
        }
      });
    } else {
      this.isValid = false;
      this.mensage = 'debe ingresar campos obligatorios';
    }
  }
}
