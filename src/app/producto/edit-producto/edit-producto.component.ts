import { Component, OnInit } from '@angular/core';
import { ProductoModel } from '../../modelo/producto.model';
import { ProductoService } from '../producto.service';
import { VIGENTE, OK } from '../../modelo/httpstatus.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-producto',
  templateUrl: './edit-producto.component.html',
  styleUrls: ['./edit-producto.component.css']
})
export class EditProductoComponent implements OnInit {

  private producto = new ProductoModel();
  private isValid = true;
  private mensage: string;
  constructor(private productoServicio: ProductoService, private router: Router) { }

  ngOnInit() {
    if (sessionStorage.getItem('producto')) {
      this.producto = JSON.parse(sessionStorage.getItem('producto'));
    } else {
      this.isValid = false;
      this.mensage = 'Error al extraer informacion de producto';
    }
  }
  private modificarProducto(): void {
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

