import { Component, OnInit, Input } from '@angular/core';
import { ProductInterface } from 'src/app/models/product.model';

@Component({
  selector: 'app-tarjeta-producto-dos',
  templateUrl: './tarjeta-producto-dos.component.html',
  styleUrls: ['./tarjeta-producto-dos.component.scss']
})
export class TipoDosComponent implements OnInit {

  @Input() producto: ProductInterface;
  visible = false;

  constructor() {

  }

  ngOnInit(): void {
    console.log(this.producto);
    this.visible = true;
  }

}
