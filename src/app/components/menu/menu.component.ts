import { Component, OnInit } from '@angular/core';

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
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
