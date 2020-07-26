import { createAction } from '@ngrx/store';

const cambioEstadoBancos = createAction('[bancos component] estado bancos');
const cambiarEstadoBanco = (state: boolean) => !state;

export const ReducerActionBancos = {
    cambioEstadoBancos
};

export const ActionsBancos = {
    cambiarEstadoBanco
};
