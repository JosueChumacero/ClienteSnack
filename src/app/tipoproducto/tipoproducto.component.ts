import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../producto/producto.service';
import { TipoProductoModel } from '../modelo/tipoproducto.model';
import { NO_VIGENTE, OK } from '../modelo/httpstatus.model';

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
  private deleteTipoProducto(tipoProducto: TipoProductoModel): void {
    tipoProducto.estado = NO_VIGENTE;
    this.productoServicio.saveOrUpdateTipoProducto(tipoProducto).subscribe(res => {
      if (res.responseCode === OK) {
        this.productoServicio.getTipoProducto().subscribe(resul => {
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
}
