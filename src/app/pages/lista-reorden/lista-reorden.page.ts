import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-lista-reorden',
    templateUrl: './lista-reorden.page.html',
    styleUrls: ['./lista-reorden.page.scss'],
})
export class ListaReordenPage implements OnInit {

    personajes: string[] = [
        'Bob esponja', 'Batman', 'Super man', 'Spider man'
    ];

    disabledReorderButton: boolean = false;

    constructor() { }

    ngOnInit() {
    }

    doReorder(event: any){
        //Para efectuar el reorden del item
        //Una vez obtenido de donde se movio el elemento lo moveremos a donde se movio
        const itemMover = this.personajes.splice( event.detail.from, 1)[0];
        //Efectuamos el cambio del elemento
        this.personajes.splice( event.detail.to, 0, itemMover);

        console.log(event);
        event.detail.complete();
        console.log(this.personajes);
    }

    intercambiarBoton(){
        this.disabledReorderButton = !this.disabledReorderButton;
    }

}
