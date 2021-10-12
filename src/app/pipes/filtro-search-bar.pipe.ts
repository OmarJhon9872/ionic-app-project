import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filtroSearchBar'
})
export class FiltroSearchBarPipe implements PipeTransform {

    transform(arreglo: any[],
        textoABuscar: string = '',
        columna: string = 'title'
    ): any[] {

        if (!arreglo) {
            return arreglo;
        }
        if (textoABuscar == '') {
            return arreglo;
        }

        return arreglo.filter(
            item => item[columna].toLowerCase().includes(textoABuscar.toLocaleLowerCase())
        );
    }

}
