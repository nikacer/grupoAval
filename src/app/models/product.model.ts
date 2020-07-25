
interface AccountInformation {
    accountIdentifier: string;
    productType: string;
    bank: string;
}

interface Term {
    count: number;
    units: string;
}

interface PeriodicityOfPayment {
    count: number;
    units: string;
}

interface SaldoPendientePago {
    amount: number;
}

interface TasaNominal {
    amount: number;
    rate: number;
}

interface InteresPagado {
    amount: number;
}

interface ValorConstitucion {
    amount: number;
}

interface InteresesCausados {
    amount: number;
}

interface Retefuente {
    amount: number;
}

interface ProductAccountBalances {
    saldo_pendiente_pago: SaldoPendientePago;
    tasa_nominal: TasaNominal;
    interes_pagado: InteresPagado;
    valor_constitucion: ValorConstitucion;
    intereses_causados: InteresesCausados;
    retefuente: Retefuente;
}

export interface ProductInterface {
    accountInformation: AccountInformation;
    locked: boolean;
    id: string;
    typeAccount: string;
    openedDate: Date;
    closedDate: Date;
    dueDate: Date;
    lastTransactionDate: Date;
    term: Term;
    periodicityOfPayment: PeriodicityOfPayment;
    productAccountBalances: ProductAccountBalances;
}

