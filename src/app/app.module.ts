import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ProductoComponent } from './producto/producto.component';
import {DataTableModule} from 'angular-6-datatable';
import { InicioComponent } from './inicio/inicio.component';
import { CreateVentaComponent } from './create-venta/create-venta.component';
import { VentaComponent } from './venta/venta.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { CreateProductoComponent } from './producto/create-producto/create-producto.component';
import { EditProductoComponent } from './producto/edit-producto/edit-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    CreateProductoComponent,
    InicioComponent,
    CreateVentaComponent,
    VentaComponent,
    EditProductoComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    AppRoutingModule,
    RouterModule,
    NgbModule,
    DataTableModule,
    HttpClientModule,
    FormsModule,
    NgHttpLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
