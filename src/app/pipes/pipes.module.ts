import { NgModule } from '@angular/core';
import { FiltroSearchBarPipe } from './filtro-search-bar.pipe';

//Modulos y directivas empleadas en los if, etc de html angular
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    FiltroSearchBarPipe
  ],
  exports: [
    FiltroSearchBarPipe
  ]
})
export class PipesModule { }
