import { Component, OnInit } from '@angular/core';
import { ProductoService } from './producto.service';
import { ProductoListaModel } from '../modelo/productoLista.model';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  public data: Array<ProductoListaModel>;
  constructor(private productoService: ProductoService) { }

  ngOnInit() {
    this.productoService.getProductos().subscribe(res => {
      this.data = res;
    });
  }

}
