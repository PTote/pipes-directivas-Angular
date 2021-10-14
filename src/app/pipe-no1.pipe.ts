import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeNo1'
})
export class PipeNo1Pipe implements PipeTransform {

  dato: String[]= [];


  transform(value: String, ...args: unknown[]): unknown {

    this.dato = value.split(' ');

    console.log(this.dato);


     return this.dato[2]+' '+this.dato[1]+' '+this.dato[0];

  }


}
