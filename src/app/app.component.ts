import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { ReducerInterface } from './app.reducers';
import { TranslateInterface, idiomasDisponibles } from './models/translate.model';
import { ReducerActionsTranslate } from './redux/actions/translate.actions';

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
