import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
    },
    {
        path: 'inicio',
        loadChildren: () => import('./pages/inicio/inicio.module').then(m => m.InicioPageModule)
    },
    {
        path: 'alert',
        loadChildren: () => import('./pages/alert/alert.module').then(m => m.AlertPageModule)
    },
    {
        path: 'action-sheet',
        loadChildren: () => import('./pages/action-sheet/action-sheet.module').then(m => m.ActionSheetPageModule)
    },
    {
        path: 'avatar',
        loadChildren: () => import('./pages/avatar/avatar.module').then(m => m.AvatarPageModule)
    },
    {
        path: 'button',
        loadChildren: () => import('./pages/button/button.module').then(m => m.ButtonPageModule)
    },
    {
        path: 'card',
        loadChildren: () => import('./pages/card/card.module').then(m => m.CardPageModule)
    },
    {
        path: 'checkbox',
        loadChildren: () => import('./pages/checkbox/checkbox.module').then(m => m.CheckboxPageModule)
    },
    {
        path: 'datetime',
        loadChildren: () => import('./pages/datetime/datetime.module').then(m => m.DatetimePageModule)
    },
    {
        path: 'fab',
        loadChildren: () => import('./pages/fab/fab.module').then(m => m.FabPageModule)
    },
    {
        path: 'grid',
        loadChildren: () => import('./pages/grid/grid.module').then(m => m.GridPageModule)
    },
    {
        path: 'infinite',
        loadChildren: () => import('./pages/infinite/infinite.module').then(m => m.InfinitePageModule)
    },
    {
        path: 'input',
        loadChildren: () => import('./pages/input/input.module').then(m => m.InputPageModule)
    },
    {
        path: 'lista',
        loadChildren: () => import('./pages/lista/lista.module').then(m => m.ListaPageModule)
    },
    {
        path: 'lista-reorden',
        loadChildren: () => import('./pages/lista-reorden/lista-reorden.module').then(m => m.ListaReordenPageModule)
    },
    {
        path: 'cargando',
        loadChildren: () => import('./pages/cargando/cargando.module').then(m => m.CargandoPageModule)
    },
    {
        path: 'modal',
        loadChildren: () => import('./pages/modal/modal.module').then(m => m.ModalPageModule)
    },
    {
        path: 'popover',
        loadChildren: () => import('./pages/popover/popover.module').then(m => m.PopoverPageModule)
    },
    {
        path: 'pogress-and-range',
        loadChildren: () => import('./pages/pogress-and-range/pogress-and-range.module').then(m => m.PogressAndRangePageModule)
    },
  {
    path: 'refresher',
    loadChildren: () => import('./pages/refresher/refresher.module').then( m => m.RefresherPageModule)
  },
  {
    path: 'search-bar',
    loadChildren: () => import('./pages/search-bar/search-bar.module').then( m => m.SearchBarPageModule)
  },
  {
    path: 'segment',
    loadChildren: () => import('./pages/segment/segment.module').then( m => m.SegmentPageModule)
  },
  {
    path: 'slides',
    loadChildren: () => import('./pages/slides/slides.module').then( m => m.SlidesPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'toasts',
    loadChildren: () => import('./pages/toasts/toasts.module').then( m => m.ToastsPageModule)
  },
    //   {
    //     path: 'modal-info',
    //     loadChildren: () => import('./pages/modal-info/modal-info.module').then( m => m.ModalInfoPageModule)
    //   },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
