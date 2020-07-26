import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocultarNumeroProducto',
  pure: false
})
export class OcultarNumeroProductoPipe implements PipeTransform {

  transform(str: string): string {
    return str.replace(/\d(?=\d{4})/g, '*');
  }

}
