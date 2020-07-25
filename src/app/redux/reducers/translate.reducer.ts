import { createReducer, on } from '@ngrx/store';
import { ReducerActionsTranslate, ActionsTranslate } from '../actions/translate.actions';
import { idiomasDisponibles, TranslateInterface } from 'src/app/models/translate.model';

const initialState: TranslateInterface = {
    idioma: idiomasDisponibles.en
};

const tranlateReducer = createReducer(initialState,
    on(ReducerActionsTranslate.CambiarIdioma,
        ActionsTranslate.cambiarIdiomaAction)
);

export function TranslateReducer(state, action) {
    return tranlateReducer(state, action);
}
