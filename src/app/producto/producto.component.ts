import { Component, OnInit } from '@angular/core';
import { ProductoService } from './producto.service';
import { ProductoModel } from '../modelo/producto.model';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  public data: Array<ProductoModel>;
  constructor(private productoService: ProductoService) { }

  ngOnInit() {
    this.productoService.getProductos().subscribe(res => {
      this.data = res;
    });
  }

  private deleteProducto(producto: ProductoModel): void {
    this.productoService.deleteProducto(producto.idProducto).subscribe(res => {
      this.data = res;
    });
  }

}
