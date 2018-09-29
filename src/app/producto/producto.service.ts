import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoriaModel } from '../modelo/categoria.model';
import { Observable } from 'rxjs';
import { TipoProductoModel } from '../modelo/tipoproducto.model';
import { ProductoModel } from '../modelo/producto.model';
import { RestResponse } from '../modelo/restResponse.model';
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
  public getProductos(): Observable<ProductoModel[]> {
    return this.http.get<ProductoModel[]>('http://localhost:8080/producto');
  }
  public deleteProducto(idProducto: number): Observable<ProductoModel[]> {
    return this.http.delete<ProductoModel[]>('http://localhost:8080/producto/' + idProducto);
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
