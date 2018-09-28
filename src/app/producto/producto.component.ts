import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  public data: any;
  constructor() { }

  ngOnInit() {
    this.data = new Array({ tipo: 'GASEOSA', nombre: 'INCA KOLA', precio: '1,5'});
  }

}
