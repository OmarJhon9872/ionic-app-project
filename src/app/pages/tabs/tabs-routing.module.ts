import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
    {
        //Redireccionamos desde la ruta absoluta tabs al elemento esperado
        path: '',
        redirectTo: 'account',
        pathMatch: 'full'
    },
    {
        path: '',
        component: TabsPage,
        //4.- Se definen las rutas tabs del elemento
        children: [
            {
                path: 'account',
                loadChildren: () => import('../modal/modal.module').then(m => m.ModalPageModule)
            },
            {
                path: 'call',
                loadChildren: () => import('../lista/lista.module').then(m => m.ListaPageModule)
            },
            {
                path: 'settings',
                loadChildren: () => import('../infinite/infinite.module').then(m => m.InfinitePageModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TabsPageRoutingModule { }
