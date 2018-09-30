import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../producto/producto.service';
import { TipoProductoModel } from '../modelo/tipoproducto.model';

@Component({
  selector: 'app-tipoproducto',
  templateUrl: './tipoproducto.component.html',
  styleUrls: ['./tipoproducto.component.css']
})
export class TipoproductoComponent implements OnInit {

  public data: Array<TipoProductoModel>;
  private isValid = true;
  private mensage: string;
  constructor(private productoServicio: ProductoService) { }

  ngOnInit() {
    this.productoServicio.getTipoProducto().subscribe(res => {
      this.data = res;
    });
  }
}
