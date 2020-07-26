
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
    // tarjeta de credito
    cupo_disponible_avances_pesos: Amount;
    cupo_disponible_compras_pesos: Amount;
    cupo_total: Amount;
    pago_total_pesos: Amount;
    saldo_actual: Amount;
    saldo_mora_pesos: Amount;
    valor_pago_minimo: Amount;
    // credito de libranza
    cuotas: {
        total: number;
        actual: number;
    };
}

interface Amount {
    amount: number;
    currencyCode: string;
}

export interface ProductInterface {
    accountInformation: AccountInformation;
    capacity: number;
    locked: boolean;
    id: string;
    typeAccount: string;
    openedDate: Date;
    closedDate: Date;
    dueDate: string;
    lastTransactionDate: Date;
    term: Term;
    periodicityOfPayment: PeriodicityOfPayment;
    productAccountBalances: ProductAccountBalances;
}

