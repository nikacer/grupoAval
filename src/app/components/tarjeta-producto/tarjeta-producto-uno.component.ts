import { Component, OnInit, Input } from '@angular/core';
import { ProductInterface } from 'src/app/models/product.model';
import { DatePipe, CurrencyPipe } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';


@Component({
  selector: 'app-tarjeta-producto-uno',
  templateUrl: './tarjeta-producto-uno.component.html',
  styleUrls: ['./tarjeta-producto-uno.component.scss']
})
export class TarjetaProductoComponent implements OnInit {

  @Input() producto: ProductInterface;
  @Input() titulo: { tipo: string, length: number };

  visible = false;
  estructura: TipoProductoInterface;

  constructor(
    private date: DatePipe,
    public tranlate: TranslateService,
    private currencyPipe: CurrencyPipe
  ) {
  }

  ngOnInit(): void {
    this.estructura = this.construirElementosVariables();
    this.visible = true;
  }

  construirElementosVariables() {
    let retorno: TipoProductoInterface;

    switch (this.producto.accountInformation.productType) {
      case 'CERTIFIED_DEPOSIT_TERM':
        retorno = {
          logo: '../../../assets/images/money.svg',
          seccionUno: {
            titulo: 'productos.valorInvertido',
            valor: this.currencyPipe.transform(this.producto.productAccountBalances.valor_constitucion.amount, 'COP')
          },
          seccionDos: {
            textUno: {
              titulo: 'productos.plazo',
              valor: `${this.producto.term.count} ${this.producto.term.units}`
            }
          },
          seccionTres: {
            titulo: 'productos.fechaVencimiento',
            valor: this.date.transform(this.producto.dueDate, 'shortDate')
          }
        };
        break;
      case 'CREDIT_CARD':
        retorno = this.definirTarjetaCredito();
        break;
      case 'CREDIT':
        retorno = {
          logo: '../../../assets/images/006-pay.svg',
          seccionUno: {
            titulo: 'Te queda por pagar',
            valor: this.currencyPipe.transform(this.producto.productAccountBalances.saldo_mora_pesos.amount, '$')
          },
          slide: {
            titulo: 'Has Pagado ',
            valor: `${this.producto.productAccountBalances.cuotas.actual} de ${this.producto.productAccountBalances.cuotas.total} cuotas`,
            avance: Math.round((this.producto.productAccountBalances.cuotas.total *
              this.producto.productAccountBalances.cuotas.actual) / 10)
          }
        };
        break;
      case 'CURRENT_ACCOUNT':
        retorno = {
          logo: '../../../assets/images/005-cheque.svg',
          seccionUno: {
            titulo: 'cupo Disponible',
            valor: this.currencyPipe.transform(this.producto.productAccountBalances.saldo_actual.amount, '$')
          }
        };
        break;
      case 'DEPOSIT_ACCOUNT':
        retorno = {
          logo: '../../../assets/images/003-money-bag.svg',
          seccionUno: {
            titulo: 'Saldo Disponible',
            valor: this.currencyPipe.transform(this.producto.productAccountBalances.saldo_actual.amount, '$')
          },
          seccionDuo: {
            seccionUno: {
              texto: 'En Bolsillo',
              valor: 'XXXXXX'
            },
            seccionDos: {
              texto: 'Saldo total',
              valor: this.currencyPipe.transform(this.producto.productAccountBalances.saldo_actual.amount, '$')
            }
          }
        };
        break;
    }
    return retorno;
  }

  definirTarjetaCredito(): TipoProductoInterface {
    const ret: TipoProductoInterface = { logo: '' };
    if (this.producto.accountInformation.accountIdentifier[0] === '4') {
      ret.logo = '../../../assets/images/002-visa.svg';
    } else {
      ret.logo = '../../../assets/images/001-mastercard.svg';
    }
    console.log(moment(this.producto.dueDate).diff(Date.now(), 'days'));

    ret.seccionUno = {
      titulo: 'productos.cupoDisponible',
      valor: this.currencyPipe.transform((
        this.producto.productAccountBalances.cupo_total.amount
        + this.producto.productAccountBalances.pago_total_pesos.amount)
        , '$')
    };


    ret.slide = {
      titulo: 'total gastado',
      valor: this.currencyPipe.transform(this.producto.productAccountBalances.saldo_pendiente_pago, '$'),
      avance: Math.round(this.producto.capacity)
    };

    ret.mostrarDetalles = {
      status: true,
      text: 'general.moreDetail',
      accion: () => (console.log('a mostrar'))
    }
    return ret;
  }

}


interface TipoProductoInterface {
  logo: string;
  mostrarDetalles?: {
    status: boolean;
    text: string;
    accion: () => void;
  };
  seccionUno?: {
    titulo: string;
    valor: number | string;
  };
  seccionDos?: {
    textUno: {
      titulo: string;
      valor: string;
    },
    textoDos?: {
      titulo: string;
      valor: string;
    }
  };
  seccionTres?: {
    titulo: string;
    valor: string;
  };
  slide?: {
    titulo: string;
    valor: string;
    avance: number;
  };
  boton?: boolean;
  seccionDuo?: {
    seccionUno: {
      texto: string;
      valor: string;
    };
    seccionDos?: {
      texto: string;
      valor: string;
    }
  };
}
