import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'segundaSerie'
})
export class SegundaSeriePipe implements PipeTransform {

  dato2: string="";
  entero: Number=0;

  transform(value: string, ...args: unknown[]): unknown {

  let reemplazar= /^\D|[,]/g;
  this.dato2= value.replace(reemplazar,"")
  this.entero=parseInt(this.dato2);

    return  this.entero  ;
  }

}
