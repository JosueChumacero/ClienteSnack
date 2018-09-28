import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoriaModel } from '../modelo/categoria.model';
import { Observable } from 'rxjs';
import { TipoProductoModel } from '../modelo/tipoproducto.model';
import { ProductoModel } from '../modelo/producto.model';
import { RestResponse } from '../modelo/restResponse.model';
import { ProductoListaModel } from '../modelo/productoLista.model';
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
  public saveOrUpdate(producto: ProductoModel): Observable<RestResponse> {
    return this.http.post<RestResponse>('http://localhost:8080/producto', JSON.stringify(producto));
  }
  public getProductos(): Observable<ProductoListaModel[]> {
    return this.http.get<ProductoListaModel[]>('http://localhost:8080/producto');
  }
  public validarProducto(producto: ProductoModel): boolean {
    let isvalid = true;
    if (!producto.descripcion) {
      isvalid = false;
    }
    if (!producto.precio) {
      isvalid = false;
    }
    if (!producto.idTipoproducto) {
      isvalid = false;
    }
    return isvalid;
  }
}
