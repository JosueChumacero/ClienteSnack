import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProductoService } from '../../producto/producto.service';
import { ProductoModel } from '../../modelo/producto.model';

@Component({
  selector: 'app-create-venta',
  templateUrl: './create-venta.component.html',
  styleUrls: ['./create-venta.component.css']
})
export class CreateVentaComponent implements OnInit {

  private buscarProducto: FormControl;
  private productos: Array<ProductoModel>;
  constructor(private productoServicio: ProductoService) {
  }

  ngOnInit() {
  }

  private filtrar(filtro): void {
    this.productoServicio.getProductosLikeDescripcion(filtro).subscribe(res => {
      this.productos = res;
    });
  }

}
