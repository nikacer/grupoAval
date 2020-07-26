import { Component, OnInit } from '@angular/core';
import { Productos } from '../../../assets/json/data.js';
import { ProductInterface } from 'src/app/models/product.model.js';
import { Store } from '@ngrx/store';
import { ReducerInterface } from 'src/app/app.reducers.js';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  public data: Array<ProductInterface> = Productos;
  tiposProductos = {};
  productoActual = '';
  otrosBancos = false;

  constructor(store: Store<ReducerInterface>) {
    store.select('bancos').subscribe((resp: boolean) => {
      this.otrosBancos = resp;
      this.tiposProductos = [];
      this.construirDatos();
    });
    this.construirDatos();
  }

  ngOnInit(): void {
    console.log(this.tiposProductos);

  }

  construirDatos() {
    this.data.forEach((producto: ProductInterface) => {

      if (typeof this.tiposProductos[producto.accountInformation.productType] === 'undefined') {
        this.tiposProductos[producto.accountInformation.productType] = [];
      }
      if (!this.otrosBancos) {
        this.tiposProductos[producto.accountInformation.productType].push(producto);
      } else if (producto.accountInformation.bank === 'BANCO_1') {
        this.tiposProductos[producto.accountInformation.productType].push(producto);
      }
    });
  }

  tipoProductoActual(tipoProducto: string) {
    if (this.productoActual !== tipoProducto) {
      this.productoActual = tipoProducto;
      return {
        tipo: tipoProducto,
        length: this.tiposProductos[tipoProducto].length
      };
    }

    return undefined;
  }

  retornarTipoProductos() {
    return Object.keys(this.tiposProductos);
  }
}
