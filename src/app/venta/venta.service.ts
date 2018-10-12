import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VentaModel } from '../modelo/venta.model';
import { RestResponse } from '../modelo/restResponse.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  constructor(private http: HttpClient) { }

  public saveOrUpdateVenta(venta: VentaModel): Observable<RestResponse> {
    return this.http.post<RestResponse>('http://localhost:8080/venta', JSON.stringify(venta));
  }
}
