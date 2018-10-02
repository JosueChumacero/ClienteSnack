import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ProductoService } from '../producto.service';
import { CategoriaModel } from '../../modelo/categoria.model';
import { TipoProductoModel } from '../../modelo/tipoproducto.model';
import { ProductoModel } from '../../modelo/producto.model';
import { OK, VIGENTE } from '../../modelo/httpstatus.model';

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
    this.producto.estado = VIGENTE;
    const validar = this.productoServicio.validarProducto(this.producto);
    if (validar) {
      this.productoServicio.saveOrUpdateProducto(this.producto).subscribe(res => {
        if (res.responseCode === OK) {
          this.router.navigate(['/productos']);
        } else {
          this.mensage = res.message;
          this.isValid = false;
          setTimeout(() => {
            this.isValid = true;
          }, 2000);
        }
      });
    } else {
      this.isValid = false;
      this.mensage = 'debe ingresar campos obligatorios';
      setTimeout(() => {
        this.isValid = true;
      }, 2000);
    }
  }
}
