
import { TranslateInterface } from './models/translate.model';
import { TranslateReducer } from './redux/reducers/translate.reducer';


export interface ReducerInterface {
    count: number;
    translate: TranslateInterface;
}

/**
 * Objeto con todos los reducer de la aplicación
 */
export const appReducers: any = {
    translate: TranslateReducer
};
