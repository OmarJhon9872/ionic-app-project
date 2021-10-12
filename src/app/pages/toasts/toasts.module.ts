import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToastsPageRoutingModule } from './toasts-routing.module';

import { ToastsPage } from './toasts.page';
import { ComponentesModule } from '../../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToastsPageRoutingModule,
    ComponentesModule
  ],
  declarations: [ToastsPage]
})
export class ToastsPageModule {}
