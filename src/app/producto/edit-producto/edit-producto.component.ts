import { Component, OnInit } from '@angular/core';
import { ProductoModel } from '../../modelo/producto.model';

@Component({
  selector: 'app-edit-producto',
  templateUrl: './edit-producto.component.html',
  styleUrls: ['./edit-producto.component.css']
})
export class EditProductoComponent implements OnInit {

  private producto = new ProductoModel();
  private isValid = true;
  private mensage: string;
  constructor() { }

  ngOnInit() {
    if (sessionStorage.getItem('producto')) {
      this.producto = JSON.parse(sessionStorage.getItem('producto'));
    } else {
      this.isValid = false;
      this.mensage = 'Error al extraer informacion de producto';
    }
  }
}
