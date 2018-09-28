import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoriaModel } from '../modelo/categoria.model';
import { Observable } from 'rxjs';
import { TipoProductoModel } from '../modelo/tipoproducto.model';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }

  public getCategorias(): Observable<CategoriaModel[]> {
    return this.http.get<CategoriaModel[]>('http://localhost:8080/categoria');
  }
  public getTipoProductoPorCategoria(idCategoria: number): Observable<TipoProductoModel[]> {
    return this.http.get<TipoProductoModel[]>('http://localhost:8080/tipoProducto?idCategoria=' + idCategoria);
  }
}
