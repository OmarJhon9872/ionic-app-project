import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaReordenPageRoutingModule } from './lista-reorden-routing.module';

import { ListaReordenPage } from './lista-reorden.page';
import { ComponentesModule } from '../../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaReordenPageRoutingModule,
    ComponentesModule
  ],
  declarations: [ListaReordenPage]
})
export class ListaReordenPageModule {}
