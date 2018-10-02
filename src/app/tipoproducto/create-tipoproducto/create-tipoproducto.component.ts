import { Component, OnInit } from '@angular/core';
import { CategoriaModel } from '../../modelo/categoria.model';
import { TipoProductoModel } from '../../modelo/tipoproducto.model';
import { ProductoService } from '../../producto/producto.service';
import { OK, VIGENTE } from '../../modelo/httpstatus.model';
import { Router } from '@angular/router';

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
  constructor(private productoServicio: ProductoService, private router: Router) { }

  ngOnInit() {
    this.loadCategoria();
  }

  private loadCategoria(): void {
    this.productoServicio.getCategorias().subscribe(res => {
      this.categorias = res;
    });
  }
  private guardarTipoProducto(): void {
    this.tipoProducto.estado = VIGENTE;
    const validar = this.productoServicio.validarTipoProducto(this.tipoProducto);
    if (validar) {
      this.productoServicio.saveOrUpdateTipoProducto(this.tipoProducto).subscribe(res => {
        if (res.responseCode === OK) {
          this.router.navigate(['/tipoProducto']);
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
