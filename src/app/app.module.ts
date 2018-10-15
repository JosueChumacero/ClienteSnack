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
import { VentaComponent, NgbdModalContent } from './venta/venta.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { CreateProductoComponent } from './producto/create-producto/create-producto.component';
import { EditProductoComponent } from './producto/edit-producto/edit-producto.component';
import { CreateVentaComponent } from './venta/create-venta/create-venta.component';
import { TipoproductoComponent } from './tipoproducto/tipoproducto.component';
import { CreateTipoproductoComponent } from './tipoproducto/create-tipoproducto/create-tipoproducto.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    CreateProductoComponent,
    InicioComponent,
    CreateVentaComponent,
    VentaComponent,
    EditProductoComponent,
    TipoproductoComponent,
    CreateTipoproductoComponent,
    NgbdModalContent
  ],
  entryComponents: [NgbdModalContent],
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
