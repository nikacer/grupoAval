import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ReducerInterface } from './app.reducers';
import { TranslateInterface } from './models/translate.model';


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
    store: Store<ReducerInterface>
  ) {
    this.translate.setDefaultLang('es');
    store.select('translate').subscribe((obj: TranslateInterface) => this.translate.use(obj.idioma));
  }
}
