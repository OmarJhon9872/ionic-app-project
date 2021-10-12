import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Referencia cargada para manipulacionn de formularios
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputPageRoutingModule } from './input-routing.module';

import { InputPage } from './input.page';
import { ComponentesModule } from '../../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputPageRoutingModule,
    ComponentesModule
  ],
  declarations: [InputPage]
})
export class InputPageModule {}
