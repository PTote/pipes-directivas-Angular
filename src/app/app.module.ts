import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PipeNo1Pipe } from './pipe-no1.pipe';
import { routing, appRoutingProviders } from './app.routing';
import { SegundaSeriePipe } from './segunda-serie.pipe';
import { SegundoPipeHT3Component } from './components/segundo-pipe-ht3/segundo-pipe-ht3.component';
import { TerceraSerieComponent } from './components/tercera-serie/tercera-serie.component';
import { CambiarAtributosDirective } from './cambiar-atributos.directive';
import { PrimeraSerieComponent } from './components/primera-serie/primera-serie.component';
import { MenuComponent } from './components/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    PipeNo1Pipe,
    SegundaSeriePipe,
    SegundoPipeHT3Component,
    TerceraSerieComponent,
    CambiarAtributosDirective,
    PrimeraSerieComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
