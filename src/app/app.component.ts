import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { ReducerInterface } from './app.reducers';
import { ReducerActionsCounter } from './redux/actions/counter.actions';
import { TranslateInterface, idiomasDisponibles } from './models/translate.model';
import { ActionsTranslate, ReducerActionsTranslate } from './redux/actions/translate.actions';
import { translateDispatch } from './redux/dispatchExport/translate.dispatch';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  count$: Observable<number>;
  trn: TranslateInterface;

  constructor(
    private translate: TranslateService,
    private store: Store<ReducerInterface>
  ) {
    this.translate.setDefaultLang('es');
    store.select('translate').subscribe((obj: TranslateInterface) => this.translate.use(obj.idioma));
  }



  aumentar() {
    this.store.dispatch(ReducerActionsTranslate.CambiarIdioma({ lg: idiomasDisponibles.es }));
  }
}
