import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-segundo-pipe-ht3',
  templateUrl: './segundo-pipe-ht3.component.html',
  styleUrls: ['./segundo-pipe-ht3.component.css']
})
export class SegundoPipeHT3Component implements OnInit {


  @ViewChild('userInput') public userInput: ElementRef;
  @ViewChild('titulo') public titulo: ElementRef;

  dato: string;
  public dato2: string="0";

  constructor() { }

  ngOnInit(): void {

  }

  enviarDatos(){

    let anadirValor = this.userInput.nativeElement.value;
    this.titulo.nativeElement.innerHTML= anadirValor;
    this.dato2=anadirValor;
    this.dato="";
  }

}
