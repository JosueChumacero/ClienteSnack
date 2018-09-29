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

  public data: Array<ProductoModel>;
  private isValid = true;
  private mensage: string;

  constructor(private productoService: ProductoService, private router: Router) { }

  ngOnInit() {
    this.productoService.getProductos().subscribe(res => {
      this.data = res;
    });
  }

  private deleteProducto(producto: ProductoModel): void {
    producto.estado = NO_VIGENTE;
    this.productoService.saveOrUpdate(producto).subscribe(res => {
      if (res.responseCode === OK) {
        this.productoService.getProductos().subscribe(resul => {
          this.data = resul;
        });
      } else {
        this.mensage = res.message;
        this.isValid = false;
      }
    });
  }
  public editProducto(producto: ProductoModel): void {
    sessionStorage.setItem('producto', JSON.stringify(producto));
    this.router.navigate(['/editarProducto']);
  }

}
