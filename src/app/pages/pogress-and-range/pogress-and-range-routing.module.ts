import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PogressAndRangePage } from './pogress-and-range.page';

const routes: Routes = [
  {
    path: '',
    component: PogressAndRangePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PogressAndRangePageRoutingModule {}
