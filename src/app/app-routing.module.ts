import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './producto/producto.component';
import { InicioComponent } from './inicio/inicio.component';
import { VentaComponent } from './venta/venta.component';
import { CreateProductoComponent } from './producto/create-producto/create-producto.component';
import { EditProductoComponent } from './producto/edit-producto/edit-producto.component';
import { CreateVentaComponent } from './venta/create-venta/create-venta.component';
import { TipoproductoComponent } from './tipoproducto/tipoproducto.component';
import { CreateTipoproductoComponent } from './tipoproducto/create-tipoproducto/create-tipoproducto.component';

const routes: Routes = [
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: 'inicio', component: InicioComponent },
    { path: 'productos', component: ProductoComponent },
    { path: 'crearProducto', component: CreateProductoComponent },
    { path: 'crearVenta', component: CreateVentaComponent },
    { path: 'ventas', component: VentaComponent },
    { path: 'editarProducto', component: EditProductoComponent },
    { path: 'tipoProducto', component: TipoproductoComponent },
    { path: 'crearTipoProducto', component: CreateTipoproductoComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
