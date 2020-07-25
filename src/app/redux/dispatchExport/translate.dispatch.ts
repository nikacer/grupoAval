import { TranslateInterface, idiomasDisponibles } from 'src/app/models/translate.model';

const cambioIdioma = (state: TranslateInterface, lg: idiomasDisponibles): TranslateInterface => (
    ({ ...state, idioma: lg })
);


export const translateDispatch = {
    cambioIdioma
};
