import { createAction, on, props } from '@ngrx/store';
import { idiomasDisponibles, TranslateInterface } from 'src/app/models/translate.model';
import { translateDispatch } from '../dispatchExport/translate.dispatch';

const CambiarIdioma = createAction(
    '[Treanlate Component] cambiarIdioma',
    props<{ lg: idiomasDisponibles }>()
);

const cambiarIdiomaAction = (state, { lg }) => translateDispatch.cambioIdioma(state, lg);

export const ReducerActionsTranslate = {
    CambiarIdioma
};

export const ActionsTranslate = {
    cambiarIdiomaAction
};


