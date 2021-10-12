import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PogressAndRangePageRoutingModule } from './pogress-and-range-routing.module';

import { PogressAndRangePage } from './pogress-and-range.page';
import { ComponentesModule } from '../../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PogressAndRangePageRoutingModule,
    ComponentesModule
  ],
  declarations: [PogressAndRangePage]
})
export class PogressAndRangePageModule {}
