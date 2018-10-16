import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProductoService } from '../../producto/producto.service';
import { ProductoModel } from '../../modelo/producto.model';
import { VentaModel } from '../../modelo/venta.model';
import { DetalleVentaModel } from '../../modelo/detalleventa.model';
import { VentaService } from '../venta.service';
import { OK, VIGENTE } from '../../modelo/httpstatus.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-venta',
  templateUrl: './create-venta.component.html',
  styleUrls: ['./create-venta.component.css']
})
export class CreateVentaComponent implements OnInit {

  private productos: Array<ProductoModel>;
  private venta = new VentaModel();
  private listaProducto = new Array<DetalleVentaModel>();
  private detalleVenta = new DetalleVentaModel();
  private totalVenta: number;
  private mensaje: string;
  private isValid = true;
  private bloquearImprimir = true;
  private bloquearGuardar = false;
  constructor(private productoServicio: ProductoService, private ventaServicio: VentaService,
    private router: Router) {
  }

  ngOnInit() {
    if (sessionStorage.getItem('venta')) {
      this.venta = JSON.parse(sessionStorage.getItem('venta'));
      this.listaProducto = this.venta.detalleVentaList;
      this.calcularTotalVenta();
    }
  }

  private filtrar(filtro): void {
    if (filtro) {
      this.productoServicio.getProductosLikeDescripcion(filtro).subscribe(res => {
        this.productos = res;
      });
    } else {
      this.productos = new Array<ProductoModel>();
    }
  }

  private selecionProducto(producto: ProductoModel): void {
    this.productos = new Array<ProductoModel>();
    this.detalleVenta.idProducto = producto;
    this.detalleVenta.precio = producto.precio;
  }
  private agregarVenta(): void {
    if (this.validarDetalleVenta(this.detalleVenta)) {
      if (!this.buscarDetalle(this.detalleVenta)) {
        this.detalleVenta.estado = VIGENTE;
        this.listaProducto.push(this.detalleVenta);
        this.detalleVenta = new DetalleVentaModel();
        this.calcularTotalVenta();
      } else {
        this.mensajeError('Producto ya se encuenta registrado');
      }
    } else {
      this.mensajeError('Datos incompletos, por favor ingrese los campos obligatorios');
    }
  }
  private eliminarDetalleVenta(detalleVenta: DetalleVentaModel): void {
    const index = this.listaProducto.indexOf(detalleVenta);
    this.listaProducto.splice(index, 1);
    this.calcularTotalVenta();
  }
  private calcularTotalVenta(): void {
    this.totalVenta = 0;
    this.listaProducto.forEach(element => {
      this.totalVenta = this.totalVenta + (element.cantidad * element.idProducto.precio);
    });
  }
  private validarDetalleVenta(detalleVenta: DetalleVentaModel): boolean {
    if (!detalleVenta.idProducto) {
      return false;
    }
    if (!detalleVenta.cantidad) {
      return false;
    }
    return true;
  }
  private buscarDetalle(detalleventa: DetalleVentaModel): boolean {
    return this.listaProducto.filter(function (detalle) {
      return detalle.idProducto.idProducto === detalleventa.idProducto.idProducto;
    }).length > 0;
  }
  private guardarVenta(): void {
    if (this.venta.nombre) {
      if (this.listaProducto.length > 0) {
        this.venta.detalleVentaList = this.listaProducto;
        this.venta.fecha = new Date();
        this.venta.total = this.totalVenta;
        this.venta.estado = VIGENTE;
        this.ventaServicio.saveOrUpdateVenta(this.venta).subscribe(res => {
          if (res.responseCode === OK) {
            this.mensajeError(res.message);
            this.bloquearGuardar = true;
            this.bloquearImprimir = false;
          } else {
            this.mensajeError(res.message);
          }
        });
      } else {
        this.mensajeError('Ingrese detalle de venta');
      }
    } else {
      this.mensajeError('Ingrese nombre de venta');
    }
  }
  private mensajeError(mensaje: string): void {
    this.isValid = false;
    this.mensaje = mensaje;
    setTimeout(() => {
      this.isValid = true;
    }, 2000);
  }
}
