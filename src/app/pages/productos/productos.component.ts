import { Component, OnInit } from '@angular/core';
import { Productos } from '../../../assets/json/data.js';
import { ProductInterface } from 'src/app/models/product.model.js';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  public data: Array<ProductInterface> = Productos;
  tiposProductos = {};
  productoActual = '';
  constructor() {
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
      this.tiposProductos[producto.accountInformation.productType].push(producto);
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
