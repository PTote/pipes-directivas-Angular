import { PrimeraSerieComponent } from './components/primera-serie/primera-serie.component';

import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";


import { SegundoPipeHT3Component } from "./components/segundo-pipe-ht3/segundo-pipe-ht3.component";
import { TerceraSerieComponent } from "./components/tercera-serie/tercera-serie.component";
import { MenuComponent } from './components/menu/menu.component';

const appRoutes: Routes = [

{path: 'primeraserie', component: PrimeraSerieComponent},
{path: 'segundaserie', component: SegundoPipeHT3Component},
{path: 'terceraserie', component: TerceraSerieComponent},
{path: 'menu', component: MenuComponent},
{path: '', component: MenuComponent},


];

//Exportar el modulo del router
export const appRoutingProviders: any[]=[];
export const routing: ModuleWithProviders<any>= RouterModule.forRoot(appRoutes);
