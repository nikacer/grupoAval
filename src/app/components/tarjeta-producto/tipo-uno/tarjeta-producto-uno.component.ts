import { Component, OnInit, Input } from '@angular/core';
import { ProductInterface } from 'src/app/models/product.model';

@Component({
  selector: 'app-tarjeta-producto-uno',
  templateUrl: './tarjeta-producto-uno.component.html',
  styleUrls: ['./tarjeta-producto-uno.component.scss']
})
export class TarjetaProductoComponent implements OnInit {

  @Input() producto: ProductInterface;
  @Input() titulo: { tipo: string, length: number };

  visible = false;

  constructor() {

  }

  ngOnInit(): void {
    console.log(this.producto, this.titulo);
    this.visible = true;
  }

}
