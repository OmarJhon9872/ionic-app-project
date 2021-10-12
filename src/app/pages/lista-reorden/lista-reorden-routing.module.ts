import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaReordenPage } from './lista-reorden.page';

const routes: Routes = [
  {
    path: '',
    component: ListaReordenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaReordenPageRoutingModule {}
