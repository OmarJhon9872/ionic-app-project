import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CargandoPageRoutingModule } from './cargando-routing.module';

import { CargandoPage } from './cargando.page';
import { ComponentesModule } from '../../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CargandoPageRoutingModule,
    ComponentesModule
  ],
  declarations: [CargandoPage]
})
export class CargandoPageModule {}
