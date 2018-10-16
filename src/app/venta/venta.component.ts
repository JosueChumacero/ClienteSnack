import { Component, OnInit, Input } from '@angular/core';
import { VentaService } from './venta.service';
import { VentaModel } from '../modelo/venta.model';
import { NgbModalConfig, NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductoModel } from '../modelo/producto.model';
import { DetalleVentaModel } from 'src/app/modelo/detalleventa.model';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Detalle Venta</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
    <table class="table">
    <thead>
      <tr>
        <th>Producto</th>
        <th>Precio</th>
        <th>Cantidad</th>
        <th>Total</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let items of venta.detalleVentaList">
        <td>{{items.idProducto.idTipoproducto.descripcion}}-{{items.idProducto.descripcion}}</td>
        <td>{{items.idProducto.precio | number : '1.2-2'}}</td>
        <td>{{items.cantidad | number : '1.2-2'}}</td>
        <td>{{items.idProducto.precio * items.cantidad | number : '1.2-2'}}</td>
      </tr>
    </tbody>
  </table>
  </div>
    <div class="modal-footer">
      <button type="button" ngbAutofocus class="btn btn-danger" (click)="activeModal.close('Ok click')">Ok</button>
  </div>
  `
})
// tslint:disable-next-line:component-class-suffix
export class NgbdModalContent {
  @Input() venta = new VentaModel();

  constructor(public activeModal: NgbActiveModal) { }
}
@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class VentaComponent implements OnInit {

  private data: Array<VentaModel>;
  constructor(private ventaServicio: VentaService, private router: Router,
    config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
    this.cargarVentas();
    sessionStorage.removeItem('venta');
  }

  private cargarVentas(): void {
    this.ventaServicio.getVentas().subscribe(res => {
      this.data = res;
    });
  }

  open(itemVenta: VentaModel) {
    const modalRef = this.modalService.open(NgbdModalContent, { size: 'lg' });
    modalRef.componentInstance.venta = itemVenta;
  }

  private editarVenta(itemVenta: VentaModel): void {
    sessionStorage.setItem('venta', JSON.stringify(itemVenta));
    this.router.navigate(['/crearVenta']);
  }
}
