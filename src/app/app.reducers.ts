
import { TranslateInterface } from './models/translate.model';
import { TranslateReducer } from './redux/reducers/translate.reducer';
import { BancosReducer } from './redux/reducers/bancos.reducer';


export interface ReducerInterface {
    translate: TranslateInterface;
    bancos: boolean;
}

/**
 * Objeto con todos los reducer de la aplicación
 */
export const appReducers = {
    translate: TranslateReducer,
    bancos: BancosReducer
};
