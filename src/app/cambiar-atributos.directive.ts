import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCambiarAtributos]'
})
export class CambiarAtributosDirective {

  validar: boolean= false;


  constructor(private elemento: ElementRef) { }


  @HostListener('click') onclick() {

    this.validar= !this.validar;

    if(this.validar){
      this.elemento.nativeElement.style.marginLeft = "10px";
      this.elemento.nativeElement.style.marginRight = "10px";
      this.elemento.nativeElement.style.marginTop = "23px";
      this.elemento.nativeElement.style.borderRadius = "10px";
      this.elemento.nativeElement.style.borderColor = "black";
    }else{
      this.elemento.nativeElement.style.display = "block";
      this.elemento.nativeElement.style.margin = "8px";
      this.elemento.nativeElement.style.borderColor = "greenyellow ";
      this.elemento.nativeElement.style.borderRadius = "0";
    }


  }



}
