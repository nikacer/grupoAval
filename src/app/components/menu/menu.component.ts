import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ReducerInterface } from 'src/app/app.reducers';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menu = [
    {
      label: 'productos.tuOrganizador',
      extra: 'productos.nuevo',
      link: ''
    },
    {
      label: 'productos.transferencias',
      link: ''
    },
    {
      label: 'productos.certificados',
      link: ''
    },
    {
      label: 'productos.seguridad',
      link: ''
    },
    {
      label: 'productos.pagos',
      link: ''
    },
  ];

  lang = 'es';

  constructor(private store: Store<ReducerInterface>) {
    this.store.select('translate').subscribe(lg => {
      this.lang = lg.idioma;
    });
  }

  ngOnInit(): void {
  }

}
