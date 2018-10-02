import { Component, OnInit } from '@angular/core';
import { ProductoService } from './producto.service';
import { ProductoModel } from '../modelo/producto.model';
import { OK, NO_VIGENTE } from '../modelo/httpstatus.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  private data: Array<ProductoModel>;
  private dataInicial: Array<ProductoModel>;
  private isValid = true;
  private mensage: string;

  constructor(private productoService: ProductoService, private router: Router) { }

  ngOnInit() {
    this.productoService.getProductos().subscribe(res => {
      this.data = res;
      this.dataInicial = this.data;
    });
  }

  private deleteProducto(producto: ProductoModel): void {
    producto.estado = NO_VIGENTE;
    this.productoService.saveOrUpdateProducto(producto).subscribe(res => {
      if (res.responseCode === OK) {
        this.productoService.getProductos().subscribe(resul => {
          this.data = resul;
        });
      } else {
        this.mensage = res.message;
        this.isValid = false;
        setTimeout(() => {
          this.isValid = true;
        }, 2000);
      }
    });
  }
  public editProducto(producto: ProductoModel): void {
    sessionStorage.setItem('producto', JSON.stringify(producto));
    this.router.navigate(['/editarProducto']);
  }

  private filterItems(query) {
    this.data = this.dataInicial;
    this.data = this.data.filter(function (producto) {
      return producto.descripcion.toLowerCase().indexOf(query.toLowerCase()) > -1;
    });
    if (this.data.length === 0) {
      this.data = this.dataInicial;
      this.data = this.data.filter(function (producto) {
        return producto.idTipoproducto.descripcion.toLowerCase().indexOf(query.toLowerCase()) > -1;
      });
    }
  }
  private filtrar(filtro): void {
    this.filterItems(filtro);
  }
}
