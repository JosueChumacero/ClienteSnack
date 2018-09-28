import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './producto/producto.component';
import { InicioComponent } from './inicio/inicio.component';
import { CreateProductoComponent } from './create-producto/create-producto.component';
import { CreateVentaComponent } from './create-venta/create-venta.component';
import { VentaComponent } from './venta/venta.component';

const routes: Routes = [
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: 'inicio', component: InicioComponent },
    { path: 'productos', component: ProductoComponent },
    { path: 'crearProducto', component: CreateProductoComponent },
    { path: 'crearVenta', component: CreateVentaComponent },
    { path: 'ventas', component: VentaComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
