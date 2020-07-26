import { Component, OnInit } from '@angular/core';
import { faUserCircle, faBell, faSignOutAlt, faLanguage } from '@fortawesome/free-solid-svg-icons';
import { idiomasDisponibles } from '../../models/translate.model';
import { ReducerActionsTranslate } from '../../redux/actions/translate.actions';
import { ReducerInterface } from '../../app.reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  iconos = { faUserCircle, faBell, faSignOutAlt, faLanguage };

  menu = [
    {
      label: 'header.perfil',
      icono: faUserCircle,
      link: ''
    },
    {
      label: 'header.alertas',
      icono: faBell,
      link: ''
    },
    {
      label: 'header.idiomas',
      icono: faLanguage,
      link: '',
      child: [
        {
          label: 'idiomas.es',
          click: idiomasDisponibles.es
        },
        {
          label: 'idiomas.en',
          click: idiomasDisponibles.en
        }
      ]
    },
    {
      label: 'header.salidaSegura',
      icono: faSignOutAlt,
      link: ''
    }

  ]

  constructor(private store: Store<ReducerInterface>) { }

  ngOnInit(): void {
  }

  cambiarIdioma(idioma: idiomasDisponibles) {
    this.store.dispatch(ReducerActionsTranslate.CambiarIdioma({ lg: idioma }));
  }

}
