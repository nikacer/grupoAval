import { createReducer, on } from '@ngrx/store';
import { ReducerActionBancos, ActionsBancos } from '../actions/bancos.action';

const initialState = false;


const bancosReducer = createReducer(initialState,
    on(ReducerActionBancos.cambioEstadoBancos, ActionsBancos.cambiarEstadoBanco)
);

export function BancosReducer(state, action) {
    return bancosReducer(state, action);
}
